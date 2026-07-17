import { useState, useEffect } from "react";
import { BrevoSignup } from "../components/brevo/brevoSignup";
import Hero from "../components/hero";
import Section from "../components/section";

export default function Home() {
  // State variables for tracking popovers and responsive viewport state
  const [showSyncCardPopover, setShowSyncCardPopover] = useState(false);
  const [showBrandPopover, setShowBrandPopover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor window resize to switch layout styles dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize(); // Evaluate layout on initial component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const steps = [
    {
      title: "Before your first dive",
      subtitle: "Step 1",
      desc: "Photograph your Scuba Seasons Sync Card.",
      imgSrc: "path_to_screenshot_1.png",
      altText: "Mobile screen showing raw dive computer file import progress bar"
    },
    {
      title: "Enjoy your dives",
      subtitle: "Step 2",
      desc: "Take photos normally with your camera",
      imgSrc: "path_to_screenshot_2.png",
      altText: "Mobile screen showing local image gallery selection grid"
    },
    {
      title: "After your final dive",
      subtitle: "Step 3",
      desc: (
        <>
          Photograph the Sync Card again.{" "}
          <span 
            style={styles.popoverLink} 
            onClick={() => setShowSyncCardPopover(true)}
          >
            Why two Sync Cards?
          </span>
        </>
      ),
      imgSrc: "path_to_screenshot_3.png",
      altText: "Phone screen displaying visual timeline pairing photo timestamps to depth peaks"
    },
    {
      title: "Create your Dive Story",
      subtitle: "Step 4",
      desc: "Upload your photos and dive logs. Scuba Seasons helps you synchronize your photos, identify marine life and record dive conditions to create your Dive Story.",
      imgSrc: "path_to_screenshot_4.png",
      altText: "Mobile screen tagging a turtle photo with details"
    },
    {
      title: "Your Dive Story is ready",
      subtitle: "Step 5",
      desc: "Review your completed Dive Story, then share it with friends or keep it as part of your personal dive journal.",
      imgSrc: "path_to_screenshot_5.png",
      altText: "Finished interactive dive story mockup ready for export"
    }
  ];

  function Sequence({ children }) {
    return (
      <div style={styles.sequenceContainer}>
        {children}
      </div>
    );
  }

  function Step({ title, subtitle, isLast, index, children }) {
    const isImageLeft = index % 2 !== 0;

    return (
      <div style={styles.stepWrapper}>
        <div style={styles.indicatorTrack}>
          <div style={styles.bulletBubble}>
            {subtitle.replace("Step ", "")}
          </div>
          {!isLast && <div style={styles.downwardLine} />}
        </div>
        
        {/* Handles responsive flex direction switching between row layouts and column stacking */}
        <div 
          className={'twoCol'} 
          style={{ 
            ...styles.card, 
            flexDirection: isMobile 
              ? 'column' 
              : (isImageLeft ? 'row-reverse' : 'row') 
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <main style={{ position: 'relative' }}>
      <Hero />
      
      {/* Brevo Section */}
      <div className={'brevoContent'}>
        <BrevoSignup />
      </div>

      {/* Step-by-Step Sequence Section */}
      <Section>
        <div style={{ width: '100%' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>It only takes two extra photos</h2>
          
          <Sequence>
            {steps.map((step, index) => {
              const textBlock = (
                <div key="text" className={'sectionContent'} style={styles.sectionContentOverride}>
                  <span style={styles.cardSubtitle}>{step.subtitle}</span>
                  <h3 style={styles.cardTitle}>{step.title}</h3>
                  <div style={styles.descText}>{step.desc}</div>
                </div>
              );

              const mockupBlock = (
                <div key="mockup" style={styles.mockupContainer}>
                  <div style={styles.phoneFrame}>
                    <img 
                      src={step.imgSrc} 
                      alt={step.altText} 
                      style={styles.screenshot} 
                    />
                  </div>
                </div>
              );

              // On mobile, force mockup on top. On desktop, uniform base layout allows row-reverse to alternate correctly.
              const elementOrder = isMobile 
                ? [mockupBlock, textBlock] 
                : [textBlock, mockupBlock];

              return (
                <Step 
                  key={index} 
                  index={index}
                  title={step.title} 
                  subtitle={step.subtitle}
                  isLast={index === steps.length - 1}
                >
                  {elementOrder}
                </Step>
              );
            })}
          </Sequence>
        </div>
      </Section>

      {/* Result Section */}
      <Section>
          <div className={'sectionContent'} style={{alignItems: 'center'}}>
            <h2>The Result?</h2>
            <div>
              <p>The most complete record of every dive you've ever made.</p>
            </div>
          </div>
      </Section>

      {/* Sea Life Section */}
      <Section>
        <div className={'twoCol'}>
          <img
            src={'https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/sealife.png'}
            alt={'Scuba SEAsons sea life map.'}
            className={'image'}
          />
          <div className={'sectionContent'}>
            <h2>One dive. Everything together.</h2>
            <div>
              <p>Stop juggling dive logs, camera folders and scattered memories.</p>
              <p>Scuba Seasons brings everything together into one complete Dive Story:</p>
              <ul style={{ 
                listStyleType: 'none', 
                paddingLeft: '1.5rem', 
                margin: '1rem 0' 
              }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Dive computer data</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Underwater photos</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Sea life sightings</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Dive conditions</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Personal notes</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Community Section */}
      <Section>
        <div className={'twoCol'}>
          <div className={'sectionContent'}>
            <h2>Sync any camera with any dive computer.</h2>
            <div>
              <p>Photograph two Scuba Seasons Sync Cards—one before your first dive and one after your last.</p>
              <p>We'll automatically correct your camera clock, calculate clock drift and synchronize every underwater photo with its exact dive, time and depth.</p>
              
              <p style={{marginTop:15}}>
                <strong>Any camera • </strong>
                <strong 
                  style={styles.inlineHeaderLink} 
                  onClick={() => setShowBrandPopover(true)}
                >
                  Any dive computer
                </strong>
              </p>
              <p><strong>Accurate time • Accurate depth</strong></p>
            </div>
          </div>
          <img
            src={'https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/contribute.png'}
            alt={'Scuba SEAsons forms to add new sea creatures and dive sites.'}
            className={'image'}
          />
        </div>
      </Section>

      {/* Log Section */}
      <Section>
        <div className={'twoCol'}>
          <img
            src={'https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/user-profile.png'}
            alt={'Scuba SEAsons user profile.'}
            className={'image userProfileImage'}
          />
          <div className={'sectionContent'}>
            <h2>Every underwater photo becomes part of your dive.</h2>
            <div>
              <p>Instantly see where each photo fits on your dive profile, exactly when it was taken, how deep you were and what marine life you encountered.</p>
              <ul style={{ 
                listStyleType: 'none', 
                paddingLeft: '1.5rem', 
                margin: '1rem 0' 
              }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Exact dive</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Exact timestamp</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Exact depth</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Dive site</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Marine life</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Dive conditions</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Position on your dive profile</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      
      <div className={'spacer'}></div>

      {/* First Popover: Sync Card Details */}
      {showSyncCardPopover && (
        <div style={styles.popoverOverlay} onClick={() => setShowSyncCardPopover(false)}>
          <div style={styles.popoverCard} onClick={(e) => e.stopPropagation()}>
            <button style={styles.popoverCloseBtn} onClick={() => setShowSyncCardPopover(false)}>×</button>
            <h4 style={styles.popoverTitle}>Why do I need two Sync Cards?</h4>
            <div style={styles.popoverBody}>
              <p style={{ margin: '0 0 0.5rem 0' }}>Camera clocks slowly drift throughout the day.</p>
              <p style={{ margin: '0 0 0.5rem 0' }}>By photographing a Sync Card before your first dive and after your last,</p>
              <p style={{ margin: 0 }}>Scuba Seasons accurately calculates your camera's clock drift and accounts for it when syncing your photos, for down to the SECOND and to the CENTIMETER accuracy!</p>
            </div>
          </div>
        </div>
      )}

      {/* Second Popover: Supported Dive Computer Brands */}
      {showBrandPopover && (
        <div style={styles.popoverOverlay} onClick={() => setShowBrandPopover(false)}>
          <div style={styles.popoverCard} onClick={(e) => e.stopPropagation()}>
            <button style={styles.popoverCloseBtn} onClick={() => setShowBrandPopover(false)}>×</button>
            <h4 style={styles.popoverTitle}>Supported Dive Computers</h4>
            <div style={styles.popoverBody}>
              <div className={'twoCol'} style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>Bluetooth</h4>
                  <ul style={styles.brandList}>
                    <li>Suunto (EON, D-Series, Vyper)</li>
                    <li>Shearwater (Teric, Perdix, Peregrine, Petrel)</li>
                    <li>Aqualung (I-Series)</li>
                  </ul>
                </div>

                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>OAuth Connection</h4>
                  <ul style={styles.brandList}>
                    <li>Suunto</li>
                  </ul>
                </div>
             
              </div>
           
              <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#64748b', fontStyle: 'italic' }}> 
                Don't see your computer listed? Contact us at scubaseasons@gmail.com to help us test and add support for it!
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

const styles = {
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
  phoneFrame: {
    width: '180px',
    height: '330px',
    border: '8px solid #0f172a',
    borderRadius: '24px',
    overflow: 'hidden',
    backgroundColor: '#e2e8f0',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
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