import WavyBlock from './wavyBlock';
import '../App.css'

function HeroPlayer() {

  const heroVid = 'https://storage.googleapis.com/scubaseasonsvideos/HeroVideo2025.mp4'
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
