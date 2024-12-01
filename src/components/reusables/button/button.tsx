import Icon, { IconName } from '../../../icons/Icon';
import './button.css'

export type ButtonProps = {
   hRef:   string
   icon:   IconName
   styles: string
 };

function Button(props: ButtonProps) {
    return (
    <a href={props.hRef} target="_blank">
       <Icon name={props.icon} className={props.styles}/>
    </a>
    );
  }
  export default Button;
  