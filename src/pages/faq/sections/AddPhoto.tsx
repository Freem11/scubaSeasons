import { useMediaQuery } from "react-responsive";

import Tabs from "../../../components/tabs/Tabs.tsx";
import Icon from "../../../icons/Icon.tsx";
import styles from "../FAQ.module.css";

export default function AddPhoto() {
  const isLargerThanMobile = useMediaQuery({ query: "(min-width: 40rem)" });
    
  return (
    <div>
      <p>{"You can add sea life sighting photos by following these steps:"}</p>
      <Tabs
        tabs={[
          {
            id: "mobile",
            label: "Mobile",
            content: (
              <div>
                <ol className={styles.deletionSteps}>
                  <li>From the home screen, tap the dive site you want to submit your photo to, via the map or the sites listed in the main drawer.</li>
                  <li>
                    Tap
                    <span className={styles.calloutWithIcon}>
                      <Icon name="more" style={{height: 16, width: 16}}/>
                    </span>
                    at the top right corner and select
                    <span className={styles.calloutWithIcon}>
                      <Icon name="camera-plus" style={{height: 16, width: 16}}/>
                      Add a Sighting
                    </span>
                    from the menu.
                  </li>
                  <li>
                    Or scroll to the Sighting section and tap the
                    <span className={styles.calloutWithIcon}>
                      <Icon name="camera-plus" style={{height: 16, width: 16}}/>
                      Add a Sighting
                    </span>
                    button.
                  </li>
                  <li>
                    Enter the date of your dive then tap the
                    <span className={styles.calloutWithIcon}>
                      <Icon name="camera-plus" style={{height: 16, width: 16}}/>
                    </span>button to add as many sightings as you like.
                  </li>
                  <li>
                    Each photo will be shown to you to ID the sea creature and once your reach the last one and tap <b>Submit</b>.
                    Your sightings will be added to the app as soon as it is reviewed by our team.
                  </li>
                </ol>
                <div className={styles.gifContainer}>
                <video
                  className={styles.gif}
                  src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/SightingAdd.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/SightingAdd.mp4`} type="video/mp4" />
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/SightingAdd.mp4`} type="video/webm" />
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
                  <li>From the home page, select <b>Dive Sites</b> tab on the left.</li>
                  <li>Click on the dive site you want to submit your photo to.</li>
                  <li>
                    Click
                    <span className={styles.calloutWithIcon}>
                      <Icon name="camera-plus" style={{height: 16, width: 16}}/>
                      Add a Sighting
                    </span>
                    button on the top right.
                  </li>
                  <li>Click <b>Upload a Photo</b> and select the photo you want to add.</li>
                  <li>
                    Fill out the form with details about the photo and click <b>Submit</b>.
                    Your photo will be added to the app as soon as it is reviewed by our team.
                  </li>
                </ol>
                <div className={styles.gifContainer}>
                <video
                  className={styles.gifDesktop}
                  src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/web-add-photo-guide.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/web-add-photo-guide.mp4`} type="video/mp4" />
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/web-add-photo-guide.mp4`} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                </div>
              </div>
            )
          }] : [])
        ]}
      />
    </div>
  )
}