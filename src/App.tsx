import './App.css'
import './styles/fonts.scss'
import TopBar from './components/topBar';
import HeroPlayer from './components/backgroundHero';
import HeroTagLines from './components/heroTaglines';
import VideoPlayer from './components/videoPlayer';
import PopOverContext from './components/contexts/popoverContext';
import { useState } from 'react';
import EmilioPage from './components/emilioPage';
import EmilioScripts from './components/emilioScripts';


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
        <EmilioScripts/>
        </div>
        <div className='box6'>
        <EmilioPage/>
        </div>
        <div className='box7'>
        
        </div>
        <div className='box8'>

        </div>
        {/* <div className='box9'>
        <DesktopVersion/>
        </div> */}
      </div>
      </PopOverContext.Provider>
  )
}

export default App
