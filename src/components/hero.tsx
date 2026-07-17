import HeroVideo from "./heroVideo";
import styles from "./hero.module.css";
import WavyBlock from "./wavyBlock";
import "../App.css";
import PhoneVideo from "./phoneVideo";
import DownloadBadge from "./downloadBadge";
import TextCircle from "./textDecoration/textCircle";
import TextUnderline from "./textDecoration/textUnderline";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBlock}>
        <div className={styles.heroContent}>
          <div className={styles.heroHeading}>
            <h1>
              <TextUnderline>Every</TextUnderline> dive has a story
            </h1>
            <p>
              Scuba Seasons creates the most complete digital record of your dive by combining your dive computer, underwater photos, marine life, dive conditions and memories into one beautiful Dive Story.
            </p>
 <p><strong>Any</strong> camera • <strong>Any</strong> dive computer</p>
            
          </div>
          <div className={styles.heroCTAs}>
            <DownloadBadge store="apple" />
            <DownloadBadge store="google" />
          </div>
        </div>
        <PhoneVideo />
      </div>
      <HeroVideo />
      <div className={styles.overlay}>
        <WavyBlock />
      </div>
    </section>
  );
}
