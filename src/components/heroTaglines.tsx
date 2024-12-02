import CTAButton from "./reusables/callToActionButton/CTAButton";
import applelogo from "../content/AppleCTA.png";
import googlelogo from "../content/GoogleCTA.png";
import { useMediaQuery } from 'react-responsive';
import Button from "./reusables/button/button";
import './heroTaglines.css';

function HeroTagLines() {
  const isMobile = useMediaQuery({ query: '(max-width: 880px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 880px)' });

  return (
    <div style={{ display: 'flex', flexDirection: "column", textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ fontSize: '8vh', fontWeight: 'lighter' }}>Make Every Dive Unforgettable</p>
      <p style={{ fontSize: '4vh', fontWeight: 'bold', }}>Discover where and when you can dive with any sea creature</p>
      <div style={{display: 'flex', flexDirection: "row", justifyContent: "space-evenly", alignItems: 'center', width: '120%'}}>
        {isDesktop && 
           <>
            <CTAButton hRef={'https://play.google.com/store/apps/details?id=com.freem11.divegomobile'} image={googlelogo}/>
            <CTAButton hRef={'https://apps.apple.com/us/app/divego/id6450968950'} image={applelogo}/>
          </>
          }
         {isMobile && 
           <>
            <Button hRef={'https://play.google.com/store/apps/details?id=com.freem11.divegomobile'} icon={'android'} styles={'androidIcon'}/>
            <Button hRef={'https://apps.apple.com/us/app/divego/id6450968950'} icon={'apple'}  styles={'appleIcon'}/>
          </>
          }  
        
     </div>
    </div>
  );
}
export default HeroTagLines;
