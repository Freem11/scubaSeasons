import Logo from "./logo";
import styles from "./footer.module.css";
import DownloadBadge from "./downloadBadge";
import Icon from "../icons/Icon";
import WavyBlock from "./wavyBlock";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.transition}>
        <WavyBlock color="#0073e6" />
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerTop}>
            <div className={styles.footerBlock}>
              <Logo />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
              <ul className={styles.footerSocials}>
                <li>
                  <a
                    className={styles.socialLink}
                    href="https://www.instagram.com/scuba_seasons"
                  >
                    <Icon name="instagram" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.socialLink}
                    href="https://www.facebook.com/people/Scuba-SEAsons/61554622375177/"
                  >
                    <Icon name="facebook" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.socialLink}
                    href="https://www.youtube.com/@ScubaSEAsons/videos"
                  >
                    <Icon name="youtube" />
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.footerBlock}>
              <h3>Get the app</h3>
              <div className={styles.footerCTAs}>
                <DownloadBadge store="apple" small />
                <DownloadBadge store="google" small />
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div>© 2025 Scuba SEAsons. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
