import './searchExamplesPage.css';
import PhotoSlider from './reusables/photoSlider';
import GiantPacificOcto from '../content/screenShots/GiantPacificOctoMap.png';
import CommonOcto from '../content/screenShots/CommonOctoMap.png';
import CaribbeanOcto from '../content/screenShots/CaribbeanOctoMap.png';


function SearchExmaples() {
  return (
    <div className='sizingBox'>
      <div className='container'>
        <div className='centerPage'>
        <PhotoSlider
                startIndex={0}
                showArrows={true}
                slides={[
                  <img src={CaribbeanOcto} className='picStyles' key="step1" />,
                  <img src={GiantPacificOcto}  className='picStyles' key="step2" />,
                  <img src={CommonOcto}  className='picStyles' key="step3" />,
                ]}/>
                </div>
      </div>
      </div>
  );
}

export default SearchExmaples;
