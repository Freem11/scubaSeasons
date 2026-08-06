import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src='https://pub-9114df4c0fd044d0806a9e8819aa3212.r2.dev/MantaWhite.png' className={styles.logoImage}></img>
      <span>Scuba SEAsons</span>
    </div>
  );
}
