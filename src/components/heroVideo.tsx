import heroVid from "../assets/HeroVideo2025.mp4";
import styles from "./heroVideo.module.css";

export default function HeroVideo() {
  return (
    <div className={styles.heroVideo}>
      <video src={heroVid} autoPlay loop muted playsInline preload="auto">
        <source src={heroVid} type="video/mp4" />
        <source src={heroVid} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
