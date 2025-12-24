import { useMediaQuery } from "react-responsive";

import Tabs from "../../../components/tabs/Tabs.tsx";
import Icon from "../../../icons/Icon.tsx";
import styles from "../FAQ.module.css";

export default function CreateTrip() {
  const isLargerThanMobile = useMediaQuery({ query: "(min-width: 40rem)" });
    
  return (
    <div>
      <p style={{fontWeight: 'bold', color: "maroon", textAlign: 'center', marginBottom: 16}}>Before you can access the Trip Creator, you must apply to upgrade your account to a Parnter Account via the settings menu.</p>

      <p>{"You can create and promote trip for your dive centre by following these steps:"}</p>
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
                      <Icon name="diving-scuba-flag" style={{height: 16, width: 16}}/>
                      My Dive Centres
                    </span>
                    in the bottom menu.
                  </li>
                  <li>From the list of your registered dive centres, tap to select the one you would like to create a trip for.</li>
                  <li>
                    To Create a a new trip Tap
                    <span className={styles.calloutWithIcon}>
                      <Icon name="more" style={{height: 16, width: 16}}/>
                    </span>
                    at the top right corner and select
                    <span className={styles.calloutWithIcon}>
                      <Icon name="diving-scuba-flag" style={{height: 16, width: 16}}/>
                      Create Diving Trip
                    </span>
                    from the menu.
                  </li>
                  <li>
                    To Edit an existing trip tap
                    <span className={styles.calloutWithIcon}>
                      <Icon name="more" style={{height: 16, width: 16}}/>
                    </span>
                    at the top right corner of any trip and select 
                    <span className={styles.calloutWithIcon}>
                      <Icon name="pencil" style={{height: 16, width: 16}}/>
                      Edit
                    </span>
                    from the menu.
                  </li>
                  <li>
                    Fill out the form with your trips basic information & itinerary details as you normally would (Price, Dates, Trip name etc).
                  </li>
                  <li>
                    Add Dive Sites to your trip by tapping the
                    <span className={styles.calloutWithIcon}>
                      <Icon name="anchor-plus" style={{height: 16, width: 16}}/>
                      Add Dive Sites
                    </span>Button
                  </li>
                  <li>On the map tap dive sites to select them as part of your trip. When you are ready tap <b>Sites Chosen</b> to return to the form and tap <b>Submit</b>.</li>
                  <li>
                   Bonus: when editting a trip you will see the 
                    <span className={styles.calloutWithIcon}>
                      <Icon name="diving-scuba-double" style={{height: 16, width: 16}}/>
                      Clone This Trip
                    </span>Button, Tap it to copy an exiting trip to make creating a new one even faster!.
                  </li>
                </ol>
                <div className={styles.gifContainer}>
                <video
                  className={styles.gif}
                  src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/CreateTrip.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/CreateTrip.mp4`} type="video/mp4" />
                  <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/CreateTrip.mp4`} type="video/webm" />
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
                      From the home page, click
                      <span className={styles.calloutWithIcon}>
                        <Icon name="diving-scuba-flag" style={{height: 16, width: 16}}/>
                      </span>
                      at the top right corner.
                    </li>
                    <li>From the list of your registered dive centres, tap to select the one you would like to create a trip for.</li>
                    <li>
                    To Create a a new trip Tap the <b>Add Diving Event</b> button.
                  </li>
                  <li>
                    To Edit an existing trip tap go to the the top right corner of any trip card and click
                    <span className={styles.calloutWithIcon}>
                      <Icon name="pencil" style={{height: 16, width: 16}}/>
                    </span> Edit
                  </li>
                  <li>
                    Fill out the form with your trips basic information & itinerary details as you normally would (Price, Dates, Trip name etc).
                  </li>
                  <li>
                    Add Dive Sites to your trip by tapping <b>+ Add dive sites</b>
                  </li>
                  <li>On the map tap dive sites to select them as part of your trip. When you are ready tap <b>Sites Chosen</b> to return to the form and tap <b>Submit</b>.</li>
                  <li>
                   Bonus: when editting a trip you will see the <b>Clone This Trip</b> Button, Tap it to copy an exiting trip to make creating a new one even faster!.
                  </li>
                  </ol>
                  <div className={styles.gifContainer}>
                  <video
                    className={styles.gifDesktop}
                    src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/web-create-trip-guide.mp4`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/web-create-trip-guide.mp4`} type="video/mp4" />
                    <source src={`https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/web-create-trip-guide.mp4`} type="video/webm" />
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