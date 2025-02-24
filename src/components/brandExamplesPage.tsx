import './brandExamplesPage.css';
import PhotoSlider from './reusables/photoSlider';
import DiveSite from '../content/screenShots/DiveSiteCredits.png';
import UserProfile from '../content/screenShots/UserProfile.png';


function BrandExmaples() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className='container'>
        <div className='centerPage'>
        <PhotoSlider
                startIndex={0}
                showArrows={true}
                slides={[
                  <img src={DiveSite} className='picStyles' key="step1" />,
                  <img src={UserProfile}  className='picStyles' key="step2" />,
                ]}/>
                </div>
      </div>
      </div>
  );
}

export default BrandExmaples;
