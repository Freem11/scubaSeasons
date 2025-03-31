import styles from "./section.module.css";

type SectionProps = {
  children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
  return <section className={styles.section}>{children}</section>;
}
