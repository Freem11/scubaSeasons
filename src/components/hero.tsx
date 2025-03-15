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
              Discover <TextCircle>where</TextCircle> and{" "}
              <TextUnderline>when</TextUnderline> you can dive with any sea
              creature.
            </h1>
            <p>
              Join a community of divers across the globe sharing their favorite
              dive spots and the best times to visit.
            </p>
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
