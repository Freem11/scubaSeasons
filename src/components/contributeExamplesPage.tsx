import './contributeExamplesPage.css';
import PhotoSlider from './reusables/photoSlider';
import SiteSubmitter from '../content/screenShots/SiteSubmitter.png';
import PicUploader from '../content/screenShots/PicUploader.png';


function ContributeExmaples() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className='container'>
        <div className='centerPage'>
        <PhotoSlider
                startIndex={0}
                showArrows={true}
                slides={[
                  <img src={SiteSubmitter} className='picStyles' key="step1" />,
                  <img src={PicUploader}  className='picStyles' key="step2" />,
                ]}/>
                </div>
      </div>
      </div>
  );
}

export default ContributeExmaples;
