import { useMediaQuery } from "react-responsive";

import Tabs from "../../../components/tabs/Tabs.tsx";
import Icon from "../../../icons/Icon.tsx";
import styles from "../FAQ.module.css";

export default function AddDiveSiteReview() {
  const isLargerThanMobile = useMediaQuery({ query: "(min-width: 40rem)" });

  return (
    <div>
      <p>{"You can add a review for a dive site by following these steps:"}</p>
      <Tabs
        tabs={[
          {
            id: "mobile",
            label: "Mobile",
            content: (
              <div>
                  <ol className={styles.deletionSteps}>
                  <li>From the home screen, tap the dive site you want to create your review of, via the map or the sites listed in the main drawer.</li>
                  <li>
                    Tap
                    <span className={styles.calloutWithIcon}>
                      <Icon name="more" style={{height: 16, width: 16}}/>
                    </span>
                    at the top right corner and select
                    <span className={styles.calloutWithIcon}>
                      <Icon name="diving-scuba-flag" style={{height: 16, width: 16}}/>
                      Review this Dive Site
                    </span>
                    from the menu.
                  </li>
                  <li>
                    Or scroll to the Reveiews section and tap the
                    <span className={styles.calloutWithIcon}>
                      <Icon name="diving-scuba-flag" style={{height: 16, width: 16}}/>
                      Add my Review
                    </span>
                    button.
                  </li>
                  <li>
                    Enter the date of your dive then use the toggle buttons and sliders to describe the conditions you encountered on your dive.
                  </li>
                  <li>
                    On the last page you will have the opportunity to write about your dive in your own words and add photos from your dive before and tapping <b>Submit</b> to finish.
                  </li>
                  <li>
                    Note: Any photos you add will be considered for sea life sightings and even have the chance to become the dive site's main header photo!
                  </li>
                </ol>
                <div className={styles.gifContainer}>
                <video
                  className={styles.gif}
                  src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/SiteReview.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/SiteReview.mp4`} type="video/mp4" />
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/SiteReview.mp4`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
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
                    Not yet available in the web version.
                  </li>
                </ol>
                <div className={styles.gifContainer}>
                {/* <video
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
                </video> */}
                </div>
              </div>
            )
          }] : [])
        ]}
      />
    </div>
  )
}