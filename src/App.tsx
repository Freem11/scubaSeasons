import './App.css'
import './styles/fonts.scss'
import TopBar from './components/topBar';
import HeroPlayer from './components/backgroundHero';
import HeroTagLines from './components/heroTaglines';
import VideoPlayer from './components/videoPlayer';

function App() {

  return (
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
  )
}

export default App
