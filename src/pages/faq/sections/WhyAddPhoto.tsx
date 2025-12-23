import styles from "../FAQ.module.css";

export default function WhyAddPhoto() {
  return (
    <div>
      <div className={styles.faqAnswer}>
        To create a map of the best season to dive with <strong>any</strong> sea creature <strong>anywhere in the world!</strong>
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
        Sea life sighting photos (and reveiws) are attached to the dive site they were taken on, but also <strong>carry the date of your dive</strong>.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
        This allows your sighting to not only tell us <strong>where</strong> it took place but <strong>when</strong> as well
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
        By adding your sighitngs, you join divers worldwide in the goal of capturing seasonal trend in sea life on dive sites.
      </div>
    </div>
  );
}









