import Icon from "../../../icons/Icon";
import styles from "../FAQ.module.css";

export default function AddAccountMobile() {
  return (
    <div>
      <ol className={styles.deletionSteps}>
        <li>
          From the home screen, navigate to
          <span className={styles.calloutWithIcon}>
          <Icon name="person" style={{ height: 16, width: 16 }} />
            Profile
          </span>
          tab.
        </li>
        <li>
          Tap the
          <span className={styles.calloutWithIcon}>
          <Icon name="settings" style={{ height: 16, width: 16 }} />
            Gear
          </span>
          icon in the top right corner.
        </li>
        <li>Scroll down to the bottom and tap <b>Delete account.</b></li>
        <li>Confirm your choice in the dialog window.</li>
      </ol>
      <div className={styles.gifContainer}>
        <img
          src="/src/assets/FAQ/how-to-delete-account.gif"
          alt="Step-by-step guide showing how to delete your account on mobile"
          className={styles.gif}
        />
      </div>
    </div>
  )
}