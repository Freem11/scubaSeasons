import phoneCase from "../content/iPhone14Skin.png";
import { useMediaQuery } from 'react-responsive';

function VideoPlayer() {
  const isDesktop = useMediaQuery({ query: '(min-width: 880px)' });
  const headlinerVid = 'https://storage.googleapis.com/scubaseasonsvideos/MobileVideo2025.mp4'

  return (
    <div style={{position: 'relative', display: 'flex', alignItems: "center", justifyContent: 'center', marginTop: isDesktop ? '20%' : '-20%'}}>
      <img src={phoneCase} style={{position: 'absolute', height: '77vh'}}></img>
      <video src={headlinerVid}
   style={{ height: '75vh', borderRadius: '4vh'}} autoPlay loop muted playsInline preload="auto">
        <source  src={headlinerVid}
   type="video/mp4"/>
        <source  src={headlinerVid}
   type="video/webm"/>
        </video>
    </div>
  );
}
export default VideoPlayer;
