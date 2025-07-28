import { useMediaQuery } from "react-responsive";

import Tabs from "../../../components/tabs/Tabs.tsx";
import Icon from "../../../icons/Icon.tsx";
import styles from "../FAQ.module.css";

export default function AddDiveSite() {
  const isLargerThanMobile = useMediaQuery({ query: "(min-width: 40rem)" });

  return (
    <div>
      <p>{"You can add a dive site by following these steps:"}</p>
      <Tabs
        tabs={[
          {
            id: "mobile",
            label: "Mobile",
            content: (
              <div>
                <ol className={styles.deletionSteps}>
                  <li>From the home screen, tap
                    <span className={styles.calloutWithIcon}>
                      <Icon name="location-plus" style={{height: 16, width: 16}}/>
                      Site Add
                    </span>
                    in the bottom menu.
                  </li>
                  <li>
                    Add site name, then location by either dropping a pin on the map or using your current location.
                  </li>
                  <li>
                    The dive site will be added as soon as it gets reviewed by our team.
                  </li>
                </ol>
                <div className={styles.gifContainer}>
                <video
                  className={styles.gif}
                  src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/mobile-site-submit-guide.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/mobile-site-submit-guide.mp4`} type="video/mp4" />
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/mobile-site-submit-guide.mp4`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                  {/* <img
                    src="https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/mobile-site-submit.mp4"
                    alt="Step-by-step guide showing how to add a dive site on mobile"
                    className={styles.gif}
                  /> */}
                </div>
              </div>
            )},
          ...(isLargerThanMobile ? [{
            id: "desktop",
            label: "Desktop",
            content: (
              <div>
                <ol className={styles.deletionSteps}>
                  <li>
                    From the home page, click
                    <span className={styles.calloutWithIcon}>
                      <Icon name="anchor-plus" style={{height: 16, width: 16}}/>
                    </span>
                    at the top right corner.
                  </li>
                  <li>
                    Add site name, then location by either dropping a pin on the map or using your current location.
                  </li>
                  <li>
                    The dive site will be added as soon as it gets reviewed by our team.
                  </li>
                </ol>
                <div className={styles.gifContainer}>
                <video
                  className={styles.gifDesktop}
                  src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/web-site-submit-guide.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/web-site-submit-guide.mp4`} type="video/mp4" />
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/web-site-submit-guide.mp4`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                  {/* <img
                    src="/src/assets/FAQ/how-to-add-a-dive-site-desktop.gif"
                    alt="Step-by-step guide showing how to add a dive site on desktop"
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