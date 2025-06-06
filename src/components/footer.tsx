import Logo from "./logo";
import styles from "./footer.module.css";
import DownloadBadge from "./downloadBadge";
import Icon from "../icons/Icon";
import WavyBlock from "./wavyBlock";
import { Link } from "react-router-dom";

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
                Scuba SEAsons is also available on the web.{" "}
                <a
                  className={styles.textLink}
                  target="_blank"
                  href="https://scubaseasons.netlify.app"
                >
                  Create an account
                </a>{" "}
                to get started.
              </p>
              <p>
                {'Got questions? Check out our '}
                <Link to={'/faq'} className={styles.textLink}>
                  {'FAQ'}
                </Link>
                {'.'}
              </p>
              <ul className={styles.footerSocials}>
                <li>
                  <a
                    className={styles.socialLink}
                    target="_blank"
                    href="https://www.instagram.com/scuba_seasons"
                  >
                    <Icon name="instagram" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.socialLink}
                    target="_blank"
                    href="https://www.facebook.com/people/Scuba-SEAsons/61554622375177/"
                  >
                    <Icon name="facebook" />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.socialLink}
                    target="_blank"
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
