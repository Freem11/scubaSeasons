import './App.css'
import './styles/fonts.scss'
import TopBar from './components/topBar';
import HeroPlayer from './components/backgroundHero';
import HeroTagLines from './components/heroTaglines';
import VideoPlayer from './components/videoPlayer';
import PopOverContext from './components/contexts/popoverContext';
import { useState } from 'react';
import SearchExmaples from './components/searchExamplesPage';
import SearchScripts from './components/searchScripts';
import ContributeExmaples from './components/contributeExamplesPage';
import ContributeScripts from './components/contributeScript';
import BrandExmaples from './components/brandExamplesPage';
import BrandScripts from './components/brandScript';
import Footer from './components/footer';


function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <PopOverContext.Provider value={{ isOpen, setIsOpen }}>
      <div className='container'>
        <div className='boxHeader'>
        <TopBar />
        </div>
        <div className='Row1'>
        <HeroPlayer />
        </div>
        <div className='Row2'>
        </div>
        <div className='Row3'>
        </div>
        <div className='Row4'>
        </div>
        <div className='Row5'>
        </div>
        <div className='Row6'>
        </div>
        <div className='Row7'>
        </div>
        <div className='Row8'>
        </div>
        <div className='Row9'>
        </div>
        <div className='boxFooter'>
           <Footer/>
        </div>

        <div className='MobilePhone'>
          <VideoPlayer/>
        </div>
        <div className='HeroScripts'>
          <HeroTagLines/>
        </div>
     
        <div className='SearchImages'>
        <SearchExmaples/>
        </div>
        <div className='SearchScripts'>
        <SearchScripts/>
        </div>
    
        <div className='ContributeImages'>
        <ContributeExmaples/>
        </div>
        <div className='ContributeScripts'>
        <ContributeScripts/>
        </div>

        <div className='BrandImages'>
            <BrandExmaples/>
        </div>
        <div className='BrandScripts'>
            <BrandScripts/>
        </div>

      </div>
      </PopOverContext.Provider>
  )
}

export default App
