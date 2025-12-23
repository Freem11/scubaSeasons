import styles from "../FAQ.module.css";

export default function WhyAddSite() {
  return (
    <div>
      <div className={styles.faqAnswer}>
        When we go diving we are often told the <strong>name of a dive site</strong> and record it for our dive logs.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
        In <strong>Scuba SEAsons</strong>, dive sites serve as the <strong>‘anchor’ for sea life sightings and reviews</strong>. You know what dive site you were at when you took the photo, and this <strong> makes it easier for divers to make contributions</strong> with their sea life sightings and reveiws.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
        Adding sightings and reveiws to a <strong>dive site by name</strong> is much easier than trying to add it using <strong>GPS coordinates</strong>.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
        If your <strong>local dive sites</strong> are in Scuba SEAsons, <strong>all divers can add their sea life sightings and add reveiws</strong>, and you get to <strong>show off why other divers should come dive in your local area!</strong>
      </div>
    </div>
  );
}
