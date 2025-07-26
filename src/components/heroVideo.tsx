import styles from "./heroVideo.module.css";
import videoPlaceholderData from '../assets/HeroVideo2025_placeholder'
export default function HeroVideo() {

  const heroVid = 'https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/HeroVideo2025.webm'

  return (
    <div className={styles.heroVideoWrapper}>
      <img
        className={styles.videoPlaceholder}
        src={videoPlaceholderData}
       />

      <video
        className={styles.heroVideo}
        src={heroVid}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={heroVid} type="video/mp4" />
        <source src={heroVid} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
