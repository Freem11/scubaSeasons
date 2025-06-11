import { useMediaQuery } from "react-responsive";

import Tabs from "../../../components/tabs/Tabs.tsx";
import Icon from "../../../icons/Icon.tsx";
import styles from "../FAQ.module.css";

export default function AddPhoto() {
  const isLargerThanMobile = useMediaQuery({ query: "(min-width: 40rem)" });
    
  return (
    <div>
      <p>{"You can add a photo by following these steps:"}</p>
      <Tabs
        tabs={[
          {
            id: "mobile",
            label: "Mobile",
            content: (
              <div>
                <ol className={styles.deletionSteps}>
                  <li>From the home screen, tap the dive site you want to submit your photo to.</li>
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
                      <Icon name="camera-plus" style={{height: 16, width: 16}}/>
                      Add a Sighting
                    </span>
                    from the menu.
                  </li>
                  <li>
                    Tap <b>Upload a Photo</b> and select the photo you want to add.
                  </li>
                  <li>
                    Fill out the form with details about the photo and tap <b>Submit</b>.
                    Your photo will be added to the app as soon as it is reviewed by our team.
                  </li>
                </ol>
                <div className={styles.gifContainer}>
                  <img
                    src="/src/assets/FAQ/how-to-add-photo.gif"
                    alt="Step-by-step guide showing how to add a photo on mobile"
                    className={styles.gif}
                  />
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
                  <img
                    src="/src/assets/FAQ/how-to-add-photo-desktop.gif"
                    alt="Step-by-step guide showing how to add a photo on desktop"
                    className={styles.gifDesktop}
                  />
                </div>
              </div>
            )
          }] : [])
        ]}
      />
    </div>
  )
}