import heroVid from '../content/HeroVideo2025.mp4';
import WavyBlock from './reusables/wavyBlock';
import '../App.css'

function HeroPlayer() {
  return (
    <div className="video-background">
    <video src={heroVid} autoPlay loop muted playsInline preload="auto">
      <source src={heroVid} type="video/mp4" />
      <source src={heroVid} type="video/webm"/>
      Your browser does not support the video tag.
    </video>
    <WavyBlock color='white'/>
  </div>
  );
}

export default HeroPlayer;