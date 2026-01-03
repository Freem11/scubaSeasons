import styles from "../FAQ.module.css";

export default function WhyPartner() {
  return (
    <div>
      <div className={styles.faqAnswer}>
      The Partner Account is specifically aimed at dive centres, shops, liveaboards and others who organize trips to take divers diving.
      </div>
      
      <div style={{ height: 20 }} /> 

      <div className={styles.faqAnswer}>
      Upgrading to a Partner Account lets you <strong>feature your location</strong> on the Scuba SEAsons map and <strong>create listings for the trips you offer.</strong> This gives divers direct insight into where you operate and the experiences they can expect. 
      </div>

      <div style={{ height: 20 }} /> 

      <div className={styles.faqAnswer}>
      By <strong>highlighting the marine life in your area,</strong> including real sightings and seasonal patterns, you can attract more interest, increase awareness, and encourage divers to join your trips.
      </div>
    </div>
  );
}
