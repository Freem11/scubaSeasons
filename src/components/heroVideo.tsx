import styles from "./heroVideo.module.css";
import videoPlaceholderData from '../assets/HeroVideo_placeholder'

export default function HeroVideo() {
  return (
    <div className={styles.heroVideoWrapper}>
      <img
        className={styles.videoPlaceholder}
        src={videoPlaceholderData}
       />

      <video
        className={styles.heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
          {/* The Safari/iOS version */}
            <source 
              src={'https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/HeroVideo2026-1.mov'} 
              type='video/mp4; codecs="hvc1"' 
            />
            
            {/* The Chrome/Android version */}
            <source 
              src={'https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/HeroVideo2026-1.webm'} 
              type="video/webm" 
            />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
