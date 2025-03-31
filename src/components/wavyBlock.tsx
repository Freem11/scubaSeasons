import styles from "./wavyBlock.module.css";

type WavyBlockProps = {
  color?: string;
};

export default function WavyBlock(props: WavyBlockProps) {
  const waveColor = props.color ? props.color : "#FFF";

  return (
    <div className={styles.wavyBlock}>
      <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={waveColor}
          d="M0,5 Q25,0 50,5 Q75,10 100,5 L100,10 L0,10 L0,5"
        />
      </svg>
    </div>
  );
}
