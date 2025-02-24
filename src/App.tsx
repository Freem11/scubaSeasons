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


function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <PopOverContext.Provider value={{ isOpen, setIsOpen }}>
      <div className='container'>
        <div className='boxHeader'>
        <TopBar />
        </div>
        <div className='box1'>
          {/* enitre row 1 */}
        <HeroPlayer />
        </div>
        <div className='box2'>
          <VideoPlayer/>
        </div>
        <div className='box3'>
          <HeroTagLines/>
        </div>
        <div className='box4'>
           {/* enitre row 2 */}
        </div>
        <div className='box5'>
        <SearchExmaples/>
        </div>
        <div className='box6'>
        <SearchScripts/>
        </div>
        <div className='box7'>
           {/* enitre row 3 */}
        </div>
        <div className='box8'>
        <ContributeExmaples/>
        </div>

        <div className='box9'>
        <ContributeScripts/>
        </div>

        <div className='box10'>
            {/* enitre row 4 */}
        </div>

        <div className='box11'>
            {/* enitre row 5 */}
        </div>

        <div className='box12'>
            {/* enitre row 6 */}
        </div>

      </div>
      </PopOverContext.Provider>
  )
}

export default App
