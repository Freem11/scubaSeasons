import styles from "../FAQ.module.css";

export default function WhyPartner() {
  return (
    <div>
      <div className={styles.faqAnswer}>
        The <strong>Partner Account</strong> is specifically aimed at <strong>dive centres, shops, liveaboards</strong> and others who organize trips to take divers diving.
      </div>
      
      <div style={{ height: 20 }} /> 

      <div className={styles.faqAnswer}>
        With a partner account you get to <strong>feature your dive centre on our map</strong>, it also allows you to <strong>create and show any trips</strong> you are offering to any diver using the app.
      </div>

      <div style={{ height: 20 }} /> 

      <div className={styles.faqAnswer}>
        In concept, we want to let those who take divers diving have the ability to <strong>showcase the sea life</strong> in the places they take divers, boost <strong>interest, awareness and sign ups</strong> for their trips!
      </div>

      <div style={{ height: 20 }} /> 

      <div className={styles.faqAnswer}>
        There is <strong>great sea life</strong> in your local area. Let’s <strong>show that to divers</strong> and when <strong>specific creatures are in season</strong> in your area!
      </div>
    </div>
  );
}
