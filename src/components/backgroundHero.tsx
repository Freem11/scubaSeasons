import heroVid from '../content/heroVid2024.mp4';
import WavyBlock from './reusables/wavyBlock';
import '../App.css'

function HeroPlayer() {
  return (
    <div className="video-background">
    <video autoPlay loop muted controls={false}>
      <source src={heroVid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <WavyBlock color='white'/>
  </div>
  );
}

export default HeroPlayer;
