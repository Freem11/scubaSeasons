import { useContext } from 'react';
import Icon from '../../../icons/Icon';
import PopOverContext from '../../contexts/popoverContext';
import Button from '../button/button';
import './popOver.css'

function PopOverMenu() {
   const {isOpen, setIsOpen} = useContext(PopOverContext)

    return (
      <div style={{display: 'flex', flexDirection: 'column', marginRight: '3%'}} onMouseLeave={() => setIsOpen(false)}>
      <div className='dropButton' onClick={() => setIsOpen(!isOpen)}>
          <Icon name="menu" className='menuIcon' />
      </div>
      {isOpen && 
    <div className='dropMenu' onMouseLeave={() => setIsOpen(false)} style={{ padding: 2, paddingTop: 8, marginTop: 50, right: "1.5%"}}>
 <Button hRef={'https://www.facebook.com/profile.php?id=61554622375177'} icon={"facebook"} styles={'facebookIcon'}/>
 <Button hRef={'https://www.instagram.com/scuba_seasons'} icon={"instagram"} styles={'instagramLogo'}/>
 <Button hRef={'https://www.youtube.com/channel/UCAQzYoPicEgztcfT6r9xc6w'} icon={"youtube"} styles={"youtubeLogo"}/>
 <div className="buttonstyler" onClick={() => window.location = 'mailto:scubaseasons@gmail.com'}>
       <Icon name="email-send-outline" className='emailIcon'/>
       </div> 
    </div>
    }
    </div>
    );
  }
  export default PopOverMenu;
  