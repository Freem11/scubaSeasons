import { useContext } from 'react';
import './topBar.css'
import Manta from "../content/Matt_Manta_White.png";
import Icon from '../icons/Icon';
import { useMediaQuery } from 'react-responsive';
import  PopOverContext  from './contexts/popoverContext';
import Button from './reusables/button/button';
import PopOverMenu from './reusables/popOver/popOver';

function TopBar() {
  const isMobile = useMediaQuery({ query: '(max-width: 880px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 880px)' });

  return (
    <div className="bodyContainer">

      <div className="divLeft">
       <img src={Manta} className="mantalogo"></img>
      <h2 style={{ fontSize: '4vh', fontWeight: 'lighter', fontStyle: 'italic'}}>
        Scuba SEAsons
      </h2>
      </div>

{isMobile &&  <PopOverMenu/>}

 {isDesktop && 
  <div className='divRight'>
      <Button hRef={'https://www.facebook.com/profile.php?id=61554622375177'} icon={"facebook"} styles={'facebookIcon'}/>
      <Button hRef={'https://www.instagram.com/scuba_seasons'} icon={"instagram"} styles={'instagramLogo'}/>
      <Button hRef={'https://www.youtube.com/channel/UCAQzYoPicEgztcfT6r9xc6w'} icon={"youtube"} styles={'youtubeLogo'}/>
       <div className="buttonstyler" onClick={() => window.location = 'mailto:scubaseasons@gmail.com'}>
       <Icon name="email-send-outline" className='emailIcon'/>
       </div> 
     
       </div> }

  </div>
  );
}

export default TopBar;
