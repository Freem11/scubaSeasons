import phoneCase from "../content/iPhone14Skin.png";
import headlinerVid from "../content/headlinerVideo.mp4";

function VideoPlayer() {


  return (
    <div style={{position: 'relative', display: 'flex', alignItems: "center", justifyContent: 'center'}}>
      <img src={phoneCase} style={{position: 'absolute', height: '80vh'}}></img>
      <video src={headlinerVid} style={{ height: '78vh', borderRadius: '4vh'}} autoPlay loop muted playsInline/>
    </div>
  );
}
export default VideoPlayer;