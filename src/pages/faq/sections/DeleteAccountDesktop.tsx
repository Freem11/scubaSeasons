import Icon from "../../../icons/Icon";
import styles from "../FAQ.module.css";

export default function DeleteAccountDesktop() {
  return (
    <div>
      <ol className={`${styles.deletionSteps} self-center`}>
        <li>
          From the homepage, go to
          <span className={styles.calloutWithIcon}>
             <Icon name="settings" className="text-blue" style={{height: 16, width: 16 }} />
            Settings
          </span>
          .
        </li>
        <li>At the bottom of the menu, click <b>Delete account.</b></li>
        <li>Confirm your choice in the dialog window or click <b>Contact us</b> for further assistance.</li>
      </ol>
      <div className={styles.gifContainer}>
        <img
          src="/src/assets/FAQ/how-to-delete-account-desktop.gif"
          alt="Step-by-step guide showing how to delete your account on web"
          className={styles.gifDesktop}
        />
      </div>
    </div>
  )
}