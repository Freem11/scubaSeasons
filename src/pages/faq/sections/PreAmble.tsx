import styles from "../FAQ.module.css";

export default function Preamble() {
  return (
    <div>
      <div className={styles.faqAnswer}>
      Scuba SEAsons is a global platform that helps divers discover marine life, explore dive sites, and connect with the diving community.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
      Our platform combines dive sites with real marine life sightings to show which species are found in specific locations and when they are most commonly seen.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
      This allows divers to plan dives and trips based on the marine life they want to encounter, while also learning from the experiences shared by divers around the world.
      </div>
    </div>
  );
}
