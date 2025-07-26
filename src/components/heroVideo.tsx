import { IKVideo } from 'imagekitio-react'
import styles from './heroVideo.module.css'

export default function HeroVideo() {
  return (
    <div className={styles.heroVideoWrapper}>
      <IKVideo
        urlEndpoint="https://ik.imagekit.io/0xoaf9sms"
        path="/HeroVideo2025-1.mp4"
        controls={false}
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className={`${styles.heroVideo} ${styles.desktopVideo}`}
      />
    </div>
  )
}
