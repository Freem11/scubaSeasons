import phoneCase from "../assets/iPhone14Skin.png";
import headlinerVid from "../assets/MobileVideo.mp4";
import styles from "./phoneVideo.module.css";

export default function PhoneVideo() {
  return (
    <div className={styles.phoneWrapper}>
      <img src={phoneCase} className={styles.phoneCase}></img>
      <video
        src={headlinerVid}
        className={styles.phoneVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={headlinerVid} type="video/mp4" />
        <source src={headlinerVid} type="video/webm" />
      </video>
    </div>
  );
}
