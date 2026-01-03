import styles from "../FAQ.module.css";

export default function WhyAddPhoto() {
  return (
    <div>
      <div className={styles.faqAnswer}>
      Your sightings are credited to you and help improve dive planning for the entire community.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
      Every marine life photo or sighting you upload is linked to your account and credited to you.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
      Each contribution adds valuable data that helps build a clearer picture of where and when different species are typically seen.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
      When divers share sightings collectively, trip planning becomes more reliable and predictable.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
      Your contributions not only highlight your own diving experience but also help other divers discover new destinations through shared sightings.
      </div>
    </div>
  );
}









