import './footer.css'
import Manta from "../content/Matt_Manta_White.png";
import applelogo from "../content/AppleCTA.png";
import googlelogo from "../content/GoogleCTA.png";
import scubaseasonslogo from "../content/MantaCTA.png";
import { useMediaQuery } from 'react-responsive';
import Button from './reusables/button/button';
import CTAButton from './reusables/callToActionButton/CTAButton';
import Emilio from '../content/EmilioNew.png';

function Footer() {
  const isMobile = useMediaQuery({ query: '(max-width: 880px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 881px)' });

  return (
    <div className="footerContainer">

      <div className="logo">
       <img src={Manta} className="mantalogo"></img>
      <h2 style={{ fontSize: '4vh', fontWeight: 'lighter', fontStyle: 'italic', cursor: 'default'}}>
        Scuba SEAsons
      </h2>
      </div>


      <div className="cta">
        {isDesktop && 
           <>
           <div className="ctaButtons">
            <CTAButton hRef={'https://play.google.com/store/apps/details?id=com.freem11.divegomobile'} image={googlelogo}/>
            <CTAButton hRef={'https://apps.apple.com/us/app/divego/id6450968950'} image={applelogo}/>
            <CTAButton hRef={'https://scubaseasons.netlify.app'} image={scubaseasonslogo}/>
            </div>
            <img src={Emilio} height={200} className='emilio'/>
          </>
          }
         {isMobile && 
           <>
            <div className="ctaButtons">
            <Button hRef={'https://play.google.com/store/apps/details?id=com.freem11.divegomobile'} icon={'android'} styles={'androidIcon'}/>
            <Button hRef={'https://apps.apple.com/us/app/divego/id6450968950'} icon={'apple'}  styles={'appleIcon'}/>
            <a href={'https://scubaseasons.netlify.app'} target="_blank">
               <img src={Manta} style={{height: '9vh' }}></img>
            </a>
            </div>
            <img src={Emilio} height={200} className='emilio' />
          </>
          }  
        
     </div>

     <div className="rights">
       <p>© 2025. All rights reserved.</p>
      </div>

  </div>
  );
}

export default Footer;
