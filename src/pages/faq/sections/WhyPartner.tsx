import styles from "../FAQ.module.css";

export default function WhyPartner() {
  return (
    <div>
      <div className={styles.faqAnswer}>
      The Partner Account is specifically aimed at dive centres, shops, liveaboards and others who organize trips to take divers diving.
      </div>
      
      <div style={{ height: 20 }} /> 

      <div className={styles.faqAnswer}>
      Upgrading to a Partner Account lets you feature your location on the Scuba SEAsons map and create listings for the trips you offer. This gives divers direct insight into where you operate and the experiences they can expect. 
      </div>

      <div style={{ height: 20 }} /> 

      <div className={styles.faqAnswer}>
      By highlighting the marine life in your area, including real sightings and seasonal patterns, you can attract more interest, increase awareness, and encourage divers to join your trips.
      </div>
    </div>
  );
}
