import styles from "../FAQ.module.css";

export default function WhyAddSiteReview() {
  return (
    <div>
      <div className={styles.faqAnswer}>
      Dive site reviews help divers <strong>understand site conditions</strong> and decide if a location <strong>matches their experience level.</strong>
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
      Dive sites vary widely, from walls and wrecks to reefs, caves, freshwater, and high-altitude dives. Each site has conditions that affect how challenging a dive can be.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
      Working with dive instructors, we identified important conditions that divers want to know but that dive computers do not capture. Reviews in Scuba SEAsons allow divers to share this information seasonally, showing <strong>how conditions change throughout the year.</strong>
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
      Combined with marine life sightings, these reviews help divers <strong>choose dive sites that match their skills while still offering the marine life they want to see</strong>, supporting safer and better-informed dive planning.
      </div>
    </div>
  );
}
