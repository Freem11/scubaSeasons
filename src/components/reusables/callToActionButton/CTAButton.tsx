
export type CTAButtonProps = {
  hRef:   string
  image:   string
};

export default function CTAButton(props: CTAButtonProps) {
  return (
    <a href={props.hRef} target="_blank">
      <img src={props.image} style={{width: '15vw'}}></img>
    </a>
  );
}

