import styles from "./textUnderline.module.css";

type TextUnderlineProps = {
  children: React.ReactNode;
};

export default function TextUnderline(props: TextUnderlineProps) {
  return <span className={styles.textUnderline}>{props.children}</span>;
}
