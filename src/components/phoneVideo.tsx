import styles from "./phoneVideo.module.css";

export default function PhoneVideo() {
  return (
    <div className={styles.phoneWrapper}>
<video
  className={styles.phoneVideo}
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
>
  {/* The Safari/iOS version */}
  <source 
    src={'https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/Phones.mov'} 
    type='video/mp4; codecs="hvc1"' 
  />
  
  {/* The Chrome/Android version */}
  <source 
    src={'https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/Phones.webm'} 
    type="video/webm" 
  />
</video>
    </div>
  );
}
