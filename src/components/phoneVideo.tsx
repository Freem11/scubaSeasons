import phoneCase from "../assets/iPhone14Skin.png";
import styles from "./phoneVideo.module.css";
import { IKVideo } from "imagekitio-react";

export default function PhoneVideo() {
  return (
    <div className={styles.phoneWrapper}>
          <img
        className={styles.videoPlaceholder}
        src={phonePlaceholderData}
       />

      <img src={phoneCase} className={styles.phoneCase}></img>
      <IKVideo
        urlEndpoint="https://ik.imagekit.io/0xoaf9sms"
        path="/IPhone2025.mp4"
        controls={false}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className={`${styles.heroVideo} ${styles.phoneVideo}`}
      />
    </div>
  );
}
