import phoneCase from "../content/iPhone14Skin.png";
import headlinerVid from "../content/MobileVideo.mp4";
import { useMediaQuery } from 'react-responsive';

function VideoPlayer() {
  const isDesktop = useMediaQuery({ query: '(min-width: 880px)' });

  return (
    <div style={{position: 'relative', display: 'flex', alignItems: "center", justifyContent: 'center', marginTop: isDesktop ? '20%' : '-20%'}}>
      <img src={phoneCase} style={{position: 'absolute', height: '77vh'}}></img>
      <video src={headlinerVid} style={{ height: '75vh', borderRadius: '4vh'}} autoPlay loop muted playsInline/>
    </div>
  );
}
export default VideoPlayer;
