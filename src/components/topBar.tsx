import './topBar.css'
import Manta from "../content/Matt_Manta_White.png";
import Icon from '../icons/Icon';
import { useMediaQuery } from 'react-responsive';

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

    

{isMobile && 
 <Icon name="menu" className='menuIcon'/>
 }

 {isDesktop && 
  <div className='divRight'>
       <a href='https://www.facebook.com/profile.php?id=61554622375177' target="_blank">
       <Icon name="facebook" className='facebookLogo'/>
     </a>
 
     <a href='https://www.instagram.com/scuba_seasons/' target="_blank">
     <Icon name="instagram" className='instagramLogo'/>
     </a>
       
     <a href='https://www.youtube.com/channel/UCAQzYoPicEgztcfT6r9xc6w' target="_blank">
     <Icon name="youtube" className='youtubeLogo'/>
     </a>
       
       <div className="buttonstyler" onClick={() => window.location = 'mailto:scubaseasons@gmail.com'}>
       <Icon name="email-send-outline" className='emailIcon'/>
       </div> 
     
       </div> }

  </div>
  );
}

export default TopBar;
