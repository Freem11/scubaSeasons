import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img alt="logo" src="/Matt_Manta_White.webp" className={styles.logoImage} />
      <span>Scuba SEAsons</span>
    </div>
  );
}
