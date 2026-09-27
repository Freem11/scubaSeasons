import React, { useState, useRef } from 'react';
import * as piexif from 'piexifjs';
import mediaInfoFactory from 'mediainfo.js';

// Register missing EXIF offset tags in piexifjs tag dictionary
(piexif as any).TAGS.Exif[36881] = { name: 'OffsetTimeOriginal', type: 'Ascii' };
(piexif as any).TAGS.Exif[36882] = { name: 'OffsetTimeDigitized', type: 'Ascii' };

interface CameraMeta {
  make?: string;
  model?: string;
  creationTime: number | null;
}

const VideoSandbox: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  
  // Initialize timezone offset as empty string until explicitly selected by user
  const [timezoneOffset, setTimezoneOffset] = useState<number | ''>('');
  
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Track if start time came directly from local container time or true UTC
  const [startIsWallClock, setStartIsWallClock] = useState(false);

  const [cameraMeta, setCameraMeta] = useState<CameraMeta>({
    creationTime: null,
  });

  // Track export success confirmation state
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [exportedFilename, setExportedFilename] = useState('');

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const timezoneMap: { [key: number]: string } = {
    '-12': 'International Date Line West (UTC-12)',
    '-11': 'Samoa Standard Time (UTC-11)',
    '-10': 'Hawaii-Aleutian Standard Time (UTC-10)',
    '-9': 'Alaska Standard Time (UTC-9)',
    '-8': 'Pacific Standard Time (UTC-8)',
    '-7': 'Pacific Daylight/Mountain Standard Time (UTC-7)',
    '-6': 'Mountain Daylight Time (UTC-6)',
    '-5': 'Eastern Standard Time (UTC-5)',
    '-4': 'Atlantic Standard Time (UTC-4)',
    '-3': 'Argentina Time (UTC-3)',
    '-2': 'South Georgia Time (UTC-2)',
    '-1': 'Azores Time (UTC-1)',
    '0': 'Coordinated Universal Time (UTC+0)',
    '1': 'Central European Time (UTC+1)',
    '2': 'Eastern European Time (UTC+2)',
    '3': 'Moscow Standard Time (UTC+3)',
    '4': 'Gulf Standard Time (UTC+4)',
    '5': 'Pakistan Standard Time (UTC+5)',
    '6': 'Bangladesh Standard Time (UTC+6)',
    '7': 'Indochina Time (UTC+7)',
    '8': 'China Standard Time (UTC+8)',
    '9': 'Japan Standard Time (UTC+9)',
    '10': 'Australian Eastern Standard Time (UTC+10)',
    '11': 'Solomon Island Time (UTC+11)',
    '12': 'New Zealand Standard Time (UTC+12)',
    '13': 'Phoenix Island Time (UTC+13)',
    '14': 'Line Islands Time (UTC+14)',
  };

  // Direct binary scan of MP4 header atoms for GoPro signatures and model tags
  const parseGoProContainerMetadata = async (file: File): Promise<{ make?: string; model?: string }> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      const blob = file.slice(0, 131072); // Read first 128KB header chunk

      reader.onload = (e) => {
        const buffer = e.target?.result as ArrayBuffer;
        if (!buffer) return resolve({});

        const bytes = new Uint8Array(buffer);
        const textDecoder = new TextDecoder('ascii');
        const fileText = textDecoder.decode(bytes);

        let make: string | undefined;
        let model: string | undefined;

        if (fileText.includes('GoPro') || /^GX|^GH|^GOPR/i.test(file.name)) {
          make = 'GoPro';
        }

        const heroMatch = fileText.match(/HERO\d+[\w\s]*/i) || fileText.match(/HD\d+[\w\s]*/i);
        if (heroMatch) {
          model = heroMatch[0].trim();
        }

        resolve({ make, model });
      };

      reader.onerror = () => resolve({});
      reader.readAsArrayBuffer(blob);
    });
  };

  const parseVideoMetadata = async (file: File) => {
    try {
      const mediainfo = await mediaInfoFactory({
        format: 'object',
        locateFile: (path, prefix) => {
          if (path.endsWith('.wasm')) {
            return 'https://unpkg.com/mediainfo.js@0.3.7/dist/MediaInfoModule.wasm';
          }
          return prefix + path;
        },
      });

      const getSize = () => file.size;
      const readChunk = (chunkSize: number, offset: number) =>
        new Promise<Uint8Array>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target?.result) {
              resolve(new Uint8Array(e.target.result as ArrayBuffer));
            } else {
              reject(new Error('Read error'));
            }
          };
          reader.onerror = reject;
          reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize));
        });

      const result = await mediainfo.analyzeData(getSize, readChunk);

      const generalTrack = result.media?.track.find(
        (t) => t['@type'] === 'General',
      ) as Record<string, any> | undefined;

      console.log('MediaInfo General Track:', generalTrack);
      console.log('All MediaInfo Tracks:', result.media?.track);

      let parsedTime: number | null = null;
      const rawDate = generalTrack?.Encoded_Date || generalTrack?.Tagged_Date;

      if (rawDate && typeof rawDate === 'string') {
        const cleanDateStr =
          rawDate.replace(/^UTC\s+/, '').replace(/\s+UTC$/, '').replace(' ', 'T') + 'Z';
        const parsed = Date.parse(cleanDateStr);
        if (!isNaN(parsed)) parsedTime = parsed;
      }

      // 1. Check standard/QuickTime/Android container properties from MediaInfo
      let detectedMake =
        generalTrack?.Make ||
        generalTrack?.['com.apple.quicktime.make'] ||
        generalTrack?.['android.manufacturer'];

      let detectedModel =
        generalTrack?.Model ||
        generalTrack?.['com.apple.quicktime.model'] ||
        generalTrack?.['android.model'] ||
        generalTrack?.['com.gopro.cameraModel'];

      // 2. Fall back to direct binary header scan if MediaInfo missing make/model
      if (!detectedMake || !detectedModel) {
        const goproMeta = await parseGoProContainerMetadata(file);
        if (!detectedMake) detectedMake = goproMeta.make;
        if (!detectedModel) detectedModel = goproMeta.model;
      }

      setCameraMeta({
        make: detectedMake || undefined,
        model: detectedModel || undefined,
        creationTime: parsedTime,
      });

      const validTime = parsedTime ?? file.lastModified;
      setStartTime(validTime);
      setStartIsWallClock(false);
    } catch (err) {
      console.warn('Metadata extraction failed, falling back to file modification time:', err);
      setStartTime(file.lastModified);
      setStartIsWallClock(false);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (file) {
      if (videoSrc) {
        URL.revokeObjectURL(videoSrc);
      }
      setVideoSrc(URL.createObjectURL(file));
      await parseVideoMetadata(file);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) setDuration(videoRef.current.duration);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) setCurrentTime(videoRef.current.currentTime);
  };

  const getWallClockDate = () => {
    if (startTime === null) return new Date();
    const rawEpoch = startTime + currentTime * 1000;
    const offsetMs = startIsWallClock || timezoneOffset === '' ? 0 : timezoneOffset * 60 * 60 * 1000;
    return new Date(rawEpoch + offsetMs);
  };

  const formatDisplayTimestamp = (date: Date) => {
    if (timezoneOffset === '') return 'Select timezone to calculate';
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, '0');
    const d = String(date.getUTCDate()).padStart(2, '0');
    const hh = String(date.getUTCHours()).padStart(2, '0');
    const mm = String(date.getUTCMinutes()).padStart(2, '0');
    const ss = String(date.getUTCSeconds()).padStart(2, '0');
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
  };

  const formatExifTimestamp = (date: Date) => {
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, '0');
    const d = String(date.getUTCDate()).padStart(2, '0');
    const hh = String(date.getUTCHours()).padStart(2, '0');
    const mm = String(date.getUTCMinutes()).padStart(2, '0');
    const ss = String(date.getUTCSeconds()).padStart(2, '0');
    return `${y}:${m}:${d} ${hh}:${mm}:${ss}`;
  };

  const getFormattedTimezoneOffset = (offsetHours: number) => {
    const sign = offsetHours >= 0 ? '+' : '-';
    const absOffset = Math.abs(offsetHours);
    const hours = String(Math.floor(absOffset)).padStart(2, '0');
    const mins = String(Math.round((absOffset % 1) * 60)).padStart(2, '0');
    return `${sign}${hours}:${mins}`;
  };

  const exportFrameWithExif = async () => {
    if (!videoRef.current || startTime === null || timezoneOffset === '') return;

    try {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, 'image/jpeg', 0.95),
      );
      if (!blob) throw new Error('Canvas toBlob failed');

      const arrayBuffer = await blob.arrayBuffer();
      const bytes = new Uint8Array(arrayBuffer);
      let binaryString = '';
      for (let i = 0; i < bytes.byteLength; i++) {
        binaryString += String.fromCharCode(bytes[i]);
      }

      const wallClock = getWallClockDate();
      const exifDateStr = formatExifTimestamp(wallClock);
      const offsetStr = getFormattedTimezoneOffset(timezoneOffset);

      const exif0th: Record<number, string> = {};
      if (cameraMeta.make) exif0th[piexif.ImageIFD.Make] = cameraMeta.make;
      if (cameraMeta.model) exif0th[piexif.ImageIFD.Model] = cameraMeta.model;

      const exifObj = {
        '0th': exif0th,
        Exif: {
          [piexif.ExifIFD.DateTimeOriginal]: exifDateStr,
          [piexif.ExifIFD.DateTimeDigitized]: exifDateStr,
          36881: offsetStr, // OffsetTimeOriginal
          36882: offsetStr, // OffsetTimeDigitized
        },
      };

      const exifBytes = piexif.dump(exifObj);
      const binaryWithExifString = piexif.insert(exifBytes, binaryString);

      const finalBuffer = new Uint8Array(binaryWithExifString.length);
      for (let i = 0; i < binaryWithExifString.length; i++) {
        finalBuffer[i] = binaryWithExifString.charCodeAt(i);
      }

      const finalBlob = new Blob([finalBuffer], { type: 'image/jpeg' });
      const url = URL.createObjectURL(finalBlob);
      const link = document.createElement('a');
      link.href = url;

      const filenameMake = cameraMeta.make ? cameraMeta.make.replace(/\s+/g, '_') : 'Camera';
      const fileName = `${filenameMake}_${exifDateStr.replace(/[: ]/g, '_')}.jpg`;
      link.download = fileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Trigger success confirmation popup
      setExportedFilename(fileName);
      setShowSuccessModal(true);
    } catch (err) {
      console.error('Export failed:', err);
      alert('Export failed: ' + err);
    }
  };

  const handleReset = () => {
    if (videoSrc) {
      URL.revokeObjectURL(videoSrc);
    }
    setVideoSrc(null);
    setStartTime(null);
    setTimezoneOffset('');
    setCurrentTime(0);
    setDuration(0);
    setStartIsWallClock(false);
    setCameraMeta({ creationTime: null });
    setShowSuccessModal(false);
    setExportedFilename('');
  };

  const hasCameraMeta = Boolean(cameraMeta.make || cameraMeta.model);
  const isTimezoneSelected = timezoneOffset !== '';

  return (
    <>
      <div style={styles.headerBackground} />
      <main style={styles.pageContainer}>
        <div style={styles.contentWrapper}>
          <header style={styles.headerSection}>
            <h1 style={styles.title}>Video Frame & Metadata Converter</h1>
            <p style={styles.subtitle}>
              Extract high-resolution JPEG photos from video files while preserving original timestamps, camera information, and EXIF metadata.
            </p>
          </header>

          {!videoSrc ? (
            <div style={styles.uploadCard}>
              <div style={styles.stepsBox}>
                <h3 style={styles.stepsTitle}>Quick Guide</h3>
                <ol style={styles.stepsList}>
                  <li>Choose a video file to upload.</li>
                  <li>Use the scrubber along the bottom to select the frame you want. You will see the timestamp updating as you scrub.</li>
                  <li>Choose the timezone you were in at the time of filming.</li>
                </ol>
              </div>
              <div style={styles.uploadDropzone}>
                <p style={styles.uploadText}>Select a video file to begin</p>
                <input 
                  type="file" 
                  accept="video/*" 
                  onChange={handleFileUpload} 
                  style={styles.fileInput}
                />
              </div>
            </div>
          ) : (
            <div style={styles.workspaceWrapper}>
              <div style={styles.stepsBanner}>
                <span style={styles.stepItem}><strong>1.</strong> Video Loaded</span>
                <span style={styles.stepDivider}>→</span>
                <span style={styles.stepItem}><strong>2.</strong> Scrub to target frame</span>
                <span style={styles.stepDivider}>→</span>
                <span style={styles.stepItem}><strong>3.</strong> Choose timezone at filming location to enable export</span>
              </div>

              <div style={styles.workspaceGrid}>
                <div style={styles.videoCard}>
                  <div style={styles.videoWrapper}>
                    <video
                      ref={videoRef}
                      src={videoSrc}
                      onTimeUpdate={handleTimeUpdate}
                      onLoadedMetadata={handleLoadedMetadata}
                      controls
                      style={styles.videoPlayer}
                    />
                  </div>
                  <div style={styles.scrubberContainer}>
                    <label style={styles.fieldLabel}>Frame Scrub Control</label>
                    <input
                      type="range"
                      min="0"
                      max={duration}
                      step="0.01"
                      value={currentTime}
                      onChange={(e) => {
                        if (videoRef.current) videoRef.current.currentTime = parseFloat(e.target.value);
                      }}
                      style={styles.rangeSlider}
                    />
                  </div>
                </div>

                <div style={styles.sidebarCard}>
                  <h3 style={styles.sidebarTitle}>Frame Metadata</h3>

                  {hasCameraMeta && (
                    <div style={styles.metaGroup}>
                      {cameraMeta.make && (
                        <div style={styles.metaRow}>
                          <span style={styles.metaLabel}>Camera Make</span>
                          <span style={styles.metaValue}>{cameraMeta.make}</span>
                        </div>
                      )}
                      {cameraMeta.model && (
                        <div style={styles.metaRow}>
                          <span style={styles.metaLabel}>Camera Model</span>
                          <span style={styles.metaValue}>{cameraMeta.model}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div style={styles.controlGroup}>
                    <label style={styles.fieldLabel}>Filmed In Timezone (Required)</label>
                    <select
                      value={timezoneOffset}
                      onChange={(e) => setTimezoneOffset(e.target.value === '' ? '' : Number(e.target.value))}
                      style={{
                        ...styles.selectInput,
                        borderColor: isTimezoneSelected ? '#cbd5e1' : '#f59e0b',
                      }}
                    >
                      <option value="">-- Select filming timezone --</option>
                      {Object.entries(timezoneMap).map(([offset, label]) => (
                        <option key={offset} value={offset}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {!isTimezoneSelected && (
                    <p style={styles.warningText}>Please select a timezone to enable export.</p>
                  )}

                  <div style={styles.timestampCard}>
                    <span style={styles.fieldLabel}>New Photo's Timestamp Metadata</span>
                    <div style={{
                      ...styles.timestampValue,
                      color: isTimezoneSelected ? '#0073e6' : '#64748b',
                      fontSize: isTimezoneSelected ? '1.1rem' : '0.9rem',
                    }}>
                      {formatDisplayTimestamp(getWallClockDate())}
                    </div>
                  </div>

                  <button 
                    onClick={exportFrameWithExif} 
                    disabled={!isTimezoneSelected}
                    style={{
                      ...styles.exportBtn,
                      backgroundColor: isTimezoneSelected ? '#0073e6' : '#94a3b8',
                      cursor: isTimezoneSelected ? 'pointer' : 'not-allowed',
                      boxShadow: isTimezoneSelected ? '0 4px 6px -1px rgba(0, 115, 230, 0.2)' : 'none',
                    }}
                  >
                    📸 Export JPEG with EXIF
                  </button>

                  <p style={styles.disclaimerText}>
                    <strong>Note:</strong> The generated timestamp is based directly on the date and time recorded by your camera. This tool does not correct for incorrect camera clocks ( use our mobile app's device sync feature with the QR card to correct timestamps and clock drift).
                  </p>

                </div>
              </div>
            </div>
          )}

          {/* Success Modal Overlay */}
          {showSuccessModal && (
            <div style={styles.modalOverlay}>
              <div style={styles.modalCard}>
                <div style={styles.successIconContainer}>
                  <span style={styles.successIcon}>✓</span>
                </div>
                <h2 style={styles.modalTitle}>Frame Exported Successfully!</h2>
                <p style={styles.modalText}>
                  Your image file <strong>{exportedFilename}</strong> has been created with full EXIF metadata and timestamp details.
                </p>
                <button onClick={handleReset} style={styles.modalBtn}>
                  Convert Another Video
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

const styles: Record<string, React.CSSProperties> = {
  headerBackground: {
    backgroundColor: '#0173e6',
    width: '100%',
    height: '82px',
    marginBottom: '0px',
  },
  pageContainer: {
    paddingTop: '2rem',
    paddingBottom: '4rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    minHeight: 'calc(100vh - 300px)',
    backgroundColor: '#f8fafc',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#0f172a',
    position: 'relative',
  },
  contentWrapper: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  headerSection: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#0f172a',
    margin: '1rem 0 0.5rem 0',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#475569',
    maxWidth: '650px',
    margin: '0 auto',
    lineHeight: '1.5',
  },
  stepsBox: {
    backgroundColor: '#f1f5f9',
    borderRadius: '8px',
    padding: '1rem 1.25rem',
    marginBottom: '1.5rem',
    border: '1px solid #e2e8f0',
  },
  stepsTitle: {
    margin: '0 0 0.5rem 0',
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#0f172a',
  },
  stepsList: {
    margin: 0,
    paddingLeft: '1.2rem',
    fontSize: '0.875rem',
    color: '#334155',
    lineHeight: '1.5',
  },
  stepsBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    backgroundColor: '#eff6ff',
    border: '1px solid #bfdbfe',
    borderRadius: '10px',
    padding: '0.75rem 1rem',
    marginBottom: '1.5rem',
    fontSize: '0.875rem',
    color: '#1e40af',
    flexWrap: 'wrap',
  },
  stepItem: {
    fontWeight: '500',
  },
  stepDivider: {
    color: '#93c5fd',
  },
  uploadCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '2rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    maxWidth: '600px',
    margin: '0 auto',
  },
  uploadDropzone: {
    border: '2px dashed #cbd5e1',
    borderRadius: '12px',
    padding: '2.5rem 1.5rem',
    textAlign: 'center',
    backgroundColor: '#f8fafc',
  },
  uploadText: {
    margin: '0 0 1.25rem 0',
    fontSize: '1rem',
    color: '#475569',
    fontWeight: '500',
  },
  fileInput: {
    fontSize: '0.9rem',
    color: '#334155',
  },
  workspaceWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  workspaceGrid: {
    display: 'flex',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  videoCard: {
    flex: '2',
    minWidth: '320px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '1.25rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  videoWrapper: {
    backgroundColor: '#0f172a',
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
  },
  videoPlayer: {
    width: '100%',
    maxHeight: '480px',
    objectFit: 'contain',
  },
  scrubberContainer: {
    marginTop: '1.25rem',
  },
  rangeSlider: {
    width: '100%',
    marginTop: '0.5rem',
    accentColor: '#0073e6',
    cursor: 'pointer',
  },
  sidebarCard: {
    flex: '1',
    minWidth: '280px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '1.5rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  sidebarTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#0f172a',
    margin: 0,
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '0.75rem',
  },
  metaGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9rem',
  },
  metaLabel: {
    color: '#64748b',
    fontWeight: '500',
  },
  metaValue: {
    color: '#0f172a',
    fontWeight: '600',
  },
  controlGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  fieldLabel: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#475569',
    textTransform: 'uppercase',
    letterSpacing: '0.025em',
  },
  selectInput: {
    width: '100%',
    padding: '0.6rem',
    marginTop: '0.35rem',
    borderRadius: '8px',
    border: '1px solid #cbd5e1',
    backgroundColor: '#ffffff',
    color: '#0f172a',
    fontSize: '0.9rem',
    outline: 'none',
    boxSizing: 'border-box',
  },
  timestampCard: {
    backgroundColor: '#f1f5f9',
    borderRadius: '8px',
    padding: '0.85rem',
    border: '1px solid #e2e8f0',
  },
  timestampValue: {
    fontWeight: '700',
    marginTop: '0.25rem',
  },
  exportBtn: {
    width: '100%',
    padding: '0.85rem',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
  },
  disclaimerText: {
    margin: '0.25rem 0 0 0',
    fontSize: '0.75rem',
    color: '#64748b',
    lineHeight: '1.4',
    textAlign: 'left',
  },
  warningText: {
    margin: 0,
    fontSize: '0.75rem',
    color: '#b45309',
    textAlign: 'center',
    fontWeight: '500',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.65)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '1.5rem',
  },
  modalCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '2rem',
    maxWidth: '440px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    border: '1px solid #e2e8f0',
  },
  successIconContainer: {
    width: '56px',
    height: '56px',
    backgroundColor: '#dcfce7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.25rem auto',
  },
  successIcon: {
    color: '#16a34a',
    fontSize: '1.75rem',
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: '1.35rem',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 0.75rem 0',
  },
  modalText: {
    fontSize: '0.95rem',
    color: '#475569',
    lineHeight: '1.5',
    margin: '0 0 1.5rem 0',
  },
  modalBtn: {
    width: '100%',
    padding: '0.85rem',
    backgroundColor: '#0073e6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer',
    boxShadow: '0 4px 6px -1px rgba(0, 115, 230, 0.2)',
  },
};

export default VideoSandbox;