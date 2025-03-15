import styles from "./textCircle.module.css";

type TextCircleProps = {
  children: React.ReactNode;
};

export default function TextCircle(props: TextCircleProps) {
  return <span className={styles.textCircle}>{props.children}</span>;
}
