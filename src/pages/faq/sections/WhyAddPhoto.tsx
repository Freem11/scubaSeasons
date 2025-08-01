import styles from "../FAQ.module.css";

export default function WhyAddPhoto() {
  return (
    <div>
      <div className={styles.faqAnswer}>
        Any <strong>sea life photos you contribute</strong> to <strong>Scuba SEAsons</strong> are linked to your account and <strong>credited to you</strong>.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
        Adding your sightings <strong>adds to the dataset</strong> and gives everyone a <strong>better picture</strong> of where and when sea life are in different parts of the world.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
        There is <strong>no worse feeling</strong> than taking a dive trip only to find out a species you were really hoping to see is <strong>out of season</strong>. Together, with all of us adding our sightings, we can ensure that it <strong>never happens to another diver ever again</strong>.
      </div>

      <div style={{ height: 20 }} />

      <div className={styles.faqAnswer}>
        <strong>Showcase where you have been diving</strong> and what sea life you encountered, and in turn <strong>find out where you should go next</strong> by seeing what other <strong>cool sea life</strong> other divers have spotted in other places!
      </div>
    </div>
  );
}









