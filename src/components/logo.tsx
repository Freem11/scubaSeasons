import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/Matt_Manta_White.png" className={styles.logoImage}></img>
      <span>Scuba SEAsons</span>
    </div>
  );
}
