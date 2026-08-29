import { CSSProperties, ReactNode, useEffect, useState } from "react";
import Section from "../../components/section.tsx";
// styles from "./Suunto.module.css";


interface StepData {
  title: string;
  subtitle: string;
  desc: string;
  hasPopover?: boolean;
  imgSrcs: string[];
  altText: string;
}
const STEPS_DATA: StepData[] = [
  {
    title: "Before your first dive",
    subtitle: "Step 1",
    desc: "Photograph your Scuba Seasons Sync Card with your dive camera",
    imgSrcs: ['https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/suunto1a.png','https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/suunto1b.png'],
    altText: "Mobile screen showing raw dive computer file import progress bar"
  },
  {
    title: "Enjoy your dives",
    subtitle: "Step 2",
    desc: "Take photos normally with your camera",
    imgSrcs: ['https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/suunto2a.png','https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/suunto2b.png'],
    altText: "Mobile screen showing local image gallery selection grid"
  },
  {
    title: "After your final dive",
    subtitle: "Step 3",
    desc: "Photograph the Sync Card again",
    hasPopover: true,
    imgSrcs: ['https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/suunto3a.png','https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/suunto3b.png'],
    altText: "Phone screen displaying visual timeline pairing photo timestamps to depth peaks"
  }
];

interface SequenceProps {
  children: ReactNode;
}

function Sequence({ children }: SequenceProps) {
  return <div style={styles.sequenceContainer}>{children}</div>;
}

interface StepProps {
  subtitle: string;
  isLast: boolean;
  index: number;
  isMobile: boolean;
  children: ReactNode;
}

function Step({ subtitle, isLast, index, isMobile, children }: StepProps) {
  const isImageLeft = index % 2 !== 0;
  return (
    <div style={styles.stepWrapper}>
      <div style={styles.indicatorTrack}>
        <div style={styles.bulletBubble}>{subtitle.replace("Step ", "")}</div>
        {!isLast && <div style={styles.downwardLine} />}
      </div>
      <div 
        className={'twoCol'} 
        style={{ 
          ...styles.card, 
          flexDirection: isMobile ? 'column' : (isImageLeft ? 'row-reverse' : 'row') 
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function Suunto() {
    const [carouselIndices, setCarouselIndices] = useState<Record<number, number>>({});
    const [isMobile, setIsMobile] = useState<boolean>(false);

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCarouselIndices((prev) => {
            const updated = { ...prev };
            STEPS_DATA.forEach((step, index) => {
              if (step.imgSrcs.length > 1) {
                const currentIdx = prev[index] || 0;
                updated[index] = (currentIdx + 1) % step.imgSrcs.length;
              }
            });
            return updated;
          });
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);



const nextSlide = (stepIndex: number, maxImages: number) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [stepIndex]: ((prev[stepIndex] || 0) + 1) % maxImages,
    }));
  };

  const prevSlide = (stepIndex: number, maxImages: number) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [stepIndex]: ((prev[stepIndex] || 0) - 1 + maxImages) % maxImages,
    }));
  };
      
  return(
    
      <>
          <div className={styles.headerBackground}/>

        <Section>
          <div className={'twoCol'}>

            <div className={'sectionContent'}>
              <h1>Suunto Cloud Integration</h1>
              <div>
                <p>Connect your Suunto account to automatically import dive logs from your Suunto Dive Computer. Your depth profiles, bottom times, and underwater metrics sync seamlessly as soon as your device updates.</p>
              </div>
           
            </div>
          </div>
        </Section>
         <Section>
                <div style={{ width: '100%' }}>
                  <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Here's How It Works</h2>
                  
                  <Sequence>
                    {STEPS_DATA.map((step, index) => {
                      const currentActiveIdx = carouselIndices[index] || 0;
                      const hasMultipleImages = step.imgSrcs.length > 1;
        
                      const textBlock = (
                        <div key="text" className={'sectionContent'} style={styles.sectionContentOverride}>
                          <span style={styles.cardSubtitle}>{step.subtitle}</span>
                          <h3 style={styles.cardTitle}>{step.title}</h3>
                          <div style={styles.descText}>
                            
                          </div>
                        </div>
                      );
        
                      const mockupBlock = (
                        <div key="mockup" style={styles.mockupContainer}>
                          <div style={styles.carouselWrapper}>
                            <div style={styles.phoneFrame}>
                              <div 
                                style={{
                                  ...styles.slideTrack,
                                  width: `${step.imgSrcs.length * 100}%`,
                                  transform: `translate3d(-${currentActiveIdx * (100 / step.imgSrcs.length)}%, 0px, 0px)`
                                }}
                              >
                                {step.imgSrcs.map((src, imgIdx) => (
                                  <div 
                                    key={imgIdx} 
                                    style={{ 
                                      ...styles.slideItem, 
                                      width: `${100 / step.imgSrcs.length}%` 
                                    }}
                                  >
                                    <img 
                                      src={src} 
                                      alt={`${step.altText} - View ${imgIdx + 1}`} 
                                      style={styles.screenshot} 
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                            {hasMultipleImages && (
                              <div style={styles.dotsContainer}>
                                {step.imgSrcs.map((_, dotIdx) => (
                                  <div 
                                    key={dotIdx}
                                    style={{
                                      ...styles.dotIndicator,
                                      backgroundColor: currentActiveIdx === dotIdx ? '#0073e6' : '#cbd5e1'
                                    }}
                                  />
                                ))}
                              </div>
                            )}
        

{hasMultipleImages && (
                      <button 
                        style={{ ...styles.carouselBtn, right: '-40px' }} 
                        onClick={() => nextSlide(index, step.imgSrcs.length)}
                      >
                        ›
                      </button>
                    )}

                    {hasMultipleImages && (
                      <div style={styles.dotsContainer}>
                        {step.imgSrcs.map((_, dotIdx) => (
                          <div 
                            key={dotIdx}
                            style={{
                              ...styles.dotIndicator,
                              backgroundColor: currentActiveIdx === dotIdx ? '#0073e6' : '#cbd5e1'
                            }}
                          />
                        ))}
                      </div>
                    )}
                          </div>
                        </div>



                      );
        

                      
                      const elementOrder = isMobile ? [mockupBlock, textBlock] : [textBlock, mockupBlock];
        
                      return (
                        <Step 
                          key={index} 
                          index={index}
                          subtitle={step.subtitle}
                          isMobile={isMobile}
                          isLast={index === STEPS_DATA.length - 1}
                        >
                          {elementOrder}
                        </Step>
                      );
                    })}
                  </Sequence>
                </div>
              </Section>
        


        </>
  )
}


const styles: Record<string, CSSProperties> = {
  responsiveImage: {
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'contain',
    margin: '0 auto',
  },
  responsiveImageLarge: {
    maxWidth: '100%',
    width: '400px',
    height: 'auto',
    objectFit: 'contain',
    margin: '0 auto',
  },
    responsiveImageLogo: {
    maxWidth: '100%',
    width: '250px',
    height: 'auto',
    objectFit: 'contain',
    margin: '0 auto',
  },
  sequenceContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '900px',
    margin: '0 auto',
  },
  stepWrapper: {
    display: 'flex',
    gap: '2rem',
  },
  indicatorTrack: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40px',
    flexShrink: 0,
  },
  bulletBubble: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#0073e6', 
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    boxShadow: '0 4px 6px -1px rgba(0, 115, 230, 0.2)',
  },
  downwardLine: {
    width: '4px',
    flexGrow: 1,
    minHeight: '260px', 
    backgroundColor: '#e2e8f0',
    margin: '8px 0',
    borderRadius: '2px',
  },
  card: {
    display: 'flex', 
    flexGrow: 1,
    marginBottom: '3rem',
    alignItems: 'center',
    gap: '2rem',
  },
  sectionContentOverride: {
    flex: 1,
    padding: 0,
  },
  cardSubtitle: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: '700',
    color: '#0073e6',
    display: 'block',
    marginBottom: '0.25rem'
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0 0 1rem 0',
  },
  descText: {
    fontSize: '1rem',
    color: '#475569',
    lineHeight: '1.6',
    margin: 0,
  },
  mockupContainer: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
  carouselWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    color: '#ffffff',
    border: 'none',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    lineHeight: '1',
    zIndex: 10,
    userSelect: 'none',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: '-25px',
    display: 'flex',
    gap: '6px',
    justifyContent: 'center',
    width: '100%',
  },
  dotIndicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    transition: 'background-color 0.2s ease',
  },
  phoneFrame: {
    width: '180px',
    height: '330px',
    border: '8px solid #0f172a',
    borderRadius: '24px',
    overflow: 'hidden',
    backgroundColor: '#e2e8f0',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    position: 'relative',
  },
  slideTrack: {
    display: 'flex',
    height: '100%',
    transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)', 
    willChange: 'transform',
  },
  slideItem: {
    height: '100%',
    flexShrink: 0,
  },
  screenshot: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  popoverLink: {
    color: '#0073e6',
    textDecoration: 'underline',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '0.92rem',
    marginLeft: '6px',
    display: 'inline-block'
  },
  inlineHeaderLink: {
    color: '#0073e6',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  popoverOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
  },
  popoverCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 1.5rem',
    position: 'relative',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15)',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  popoverCloseBtn: {
    position: 'absolute',
    top: '1rem',
    right: '1.25rem',
    background: 'none',
    border: 'none',
    fontSize: '1.75rem',
    color: '#94a3b8',
    cursor: 'pointer',
    lineHeight: 1,
  },
  popoverTitle: {
    fontSize: '1.35rem',
    fontWeight: '700',
    color: '#0f172a',
    margin: '0 0 1rem 0',
  },
  popoverBody: {
    fontSize: '0.95rem',
    color: '#475569',
    lineHeight: '1.6',
    margin: 0,
  },
  brandList: {
    margin: '0',
    paddingLeft: '1.25rem',
    lineHeight: '1.6',
    color: '#334155',
  }
};