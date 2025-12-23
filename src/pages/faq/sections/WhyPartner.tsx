import styles from "../FAQ.module.css";

export default function WhyPartner() {
  return (
    <div>
      <div className={styles.faqAnswer}>
        The <strong>Partner Account</strong> allows you to showcase your dive operation, trips and leverage the sea life data to  <strong>make your trips more appealing to prospecive divers</strong>. 
      </div>
      
      <div style={{ height: 20 }} /> 

      <div className={styles.faqAnswer}>
        You need to do 2 things after upgrading to a Partner account;
      </div>

      <div style={{ height: 20 }} /> 

      <div className={styles.faqAnswer}>
        First, encourage your diver to use the app to submit their sea life sightings and reviews of the dives sites, <strong>this gives you a free renewable pipeline of authenic content.</strong>
      </div>

      <div style={{ height: 20 }} /> 

      <div className={styles.faqAnswer}>
        Second use the <strong>Trip Creator</strong> (Partner Account exclusive feature) to create trip offerings: because part of the trip creator involves adding dive sites to the trips you create, you are then <strong>directly leveraging your divers sea life sightings and dive site reveiws to promote your trips</strong>.
      </div>

      <div style={{ height: 20 }} /> 

      <div className={styles.faqAnswer}>
        With this intial investment of effort, you will have a <strong>created a cycle of fresh content</strong> coming in from present trips to promote your future ones with. 
      </div>

      <div style={{ height: 20 }} /> 

      <div className={styles.faqAnswer}>
        Note: The Trip Creator also has a  <strong>trip cloning feature</strong>, this lets you copy an existing trip to make <strong>creating new trips even easier and much faster</strong>.
      </div>
    </div>
  );
}
