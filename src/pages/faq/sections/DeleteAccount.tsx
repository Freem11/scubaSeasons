import { useMediaQuery } from "react-responsive";

import Tabs from "../../../components/tabs/Tabs.tsx";
import Icon from "../../../icons/Icon.tsx";
import styles from "../FAQ.module.css";

export default function DeleteAccount() {
  const isLargerThanMobile = useMediaQuery({ query: "(min-width: 40rem)" });

  return (
    <div>
      <p>{"You can delete your Scuba SEAsons account and all associated personal data by following these steps:"}</p>
      <Tabs
        tabs={[
          {
            id: "mobile",
            label: "Mobile",
            content: (
              <div>
                <ol className={styles.deletionSteps}>
                  <li>
                    From the home screen, navigate to
                    <span className={styles.calloutWithIcon}>
                      <Icon name="person" style={{height: 16, width: 16}}/>
                      Profile
                    </span>
                    tab.
                  </li>
                  <li>
                    Tap
                    <span className={styles.calloutWithIcon}>
                      <Icon name="more" style={{height: 16, width: 16}}/>
                    </span>
                    at the top right corner.
                  </li>
                  <li>
                    Select
                    <span className={styles.calloutWithIcon}>
                      <Icon name="settings" style={{height: 16, width: 16}}/>
                      Open Settings
                    </span>
                    from the menu.
                  </li>
                  <li>Scroll down to the bottom and tap <b>Delete account.</b></li>
                  <li>Confirm your choice in the dialog window.</li>
                </ol>
                <div className={styles.gifContainer}>
                <video
                  className={styles.gif}
                  src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/mobile-delete-account-guide.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/mobile-delete-account-guide.mp4`} type="video/mp4" />
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/mobile-delete-account-guide.mp4`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                  {/* <img
                    src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/mobile-delete-account-guide.mp4`}
                    alt="Step-by-step guide showing how to delete your account on mobile"
                    className={styles.gif}
                  /> */}
                </div>
              </div>
            )
          },
          ...(isLargerThanMobile ? [{
            id: "desktop",
            label: "Desktop",
            content: (
              <div>
                <ol className={`${styles.deletionSteps} self-center`}>
                  <li>
                    From the homepage, go to
                    <span className={styles.calloutWithIcon}>
                      <Icon name="settings" style={{height: 16, width: 16}}/>
                      Settings
                    </span>
                    .
                  </li>
                  <li>At the bottom of the menu, click <b>Delete account.</b></li>
                  <li>Confirm your choice in the dialog window or click <b>Contact us</b> for further assistance.</li>
                </ol>
                <div className={styles.gifContainer}>
                <video
                  className={styles.gifDesktop}
                  src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/web-delete-account-guide.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/web-delete-account-guide.mp4`} type="video/mp4" />
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/web-delete-account-guide.mp4`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                  {/* <img
                    src="/src/assets/FAQ/how-to-delete-account-desktop.gif"
                    alt="Step-by-step guide showing how to delete your account on desktop"
                    className={styles.gifDesktop}
                  /> */}
                </div>
              </div>
            )
          }] : [])
        ]}
      />
    </div>
  )
}