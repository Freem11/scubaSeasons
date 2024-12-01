import './App.css'
import './styles/fonts.scss'
import TopBar from './components/topBar';
import PopOverMenu  from './components/reusables/popOver/popOver';
import HeroPlayer from './components/backgroundHero';
import HeroTagLines from './components/heroTaglines';
import VideoPlayer from './components/videoPlayer';
import PopOverContext from './components/contexts/popoverContext';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <PopOverContext.Provider value={{ isOpen, setIsOpen }}>
      <div className='container'>
        <div className='boxHeader'>
        <TopBar />
        </div>
        <div className='box1'>
        <HeroPlayer />
        </div>
        <div className='box2'>
          <VideoPlayer/>
        </div>
        <div className='box3'>
          <HeroTagLines/>
        </div>
        <div className='box4'>
        </div>
      </div>
      </PopOverContext.Provider>
  )
}

export default App
