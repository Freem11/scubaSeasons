import styles from "./phoneVideo.module.css";

export default function PhoneVideo() {
  return (
    <div className={styles.phoneWrapper}>
      <img src={'https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/iPhone16plus.png'} className={styles.phoneCase}></img>
      <video
        src={'https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/IPhone2025.mp4'}
        className={styles.phoneVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={'https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/IPhone2025.mp4'} type="video/mp4" />
        <source src={'https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/IPhone2025.mp4'} type="video/webm" />
      </video>
    </div>
  );
}
