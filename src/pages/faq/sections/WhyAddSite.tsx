import styles from "../FAQ.module.css";

export default function WhyAddSite() {
  return (
    <div>
      <div className={styles.faqAnswer}>
      Dive sites make it easier for divers to add sightings and help <strong>promote your local diving area.</strong>
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
      When divers log a dive, they usually remember the name of the dive site, not the exact GPS location.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
      In Scuba SEAsons, dive sites are used as an “anchor” for marine life sightings. So by adding your local dive sites, you enable divers to link their sightings directly to those locations.
      </div>
      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
      Over time, this builds a clear and reliable picture of the marine life in your area and helps show other divers <strong>why your region is worth visiting.</strong>
      </div>

    </div>
  );
}
