import './topBar.css'
import Manta from "../content/Matt_Manta_White.png";
import FacebookLogo from "../content/facebook.png";
import InstagramLogo from "../content/instagram.png";
import YoutubeLogo from "../content/youtube.png"

function TopBar() {
  return (
    <div className="bodyContainer">

      <div className="divLeft">
       <img src={Manta} className="mantalogo"></img>
      <h2 className="logoname" style={{ fontSize: '3vh', fontWeight: 'lighter', fontStyle: 'italic'}}>
        Scuba SEAsons
      </h2>
      </div>

      <div className='divRight'>
      <a href='https://www.facebook.com/profile.php?id=61554622375177' target="_blank">
      <img src={FacebookLogo} className="facebookLogo"></img>
    </a>

    <a href='https://www.instagram.com/scuba_seasons/' target="_blank">
    <img src={InstagramLogo} className="instagramLogo"></img>
    </a>
      
    <a href='https://www.youtube.com/channel/UCAQzYoPicEgztcfT6r9xc6w' target="_blank">
    <img src={YoutubeLogo} className="youtubeLogo"></img>
    </a>
      
      <div className="buttonstyler" onClick={() => window.location = 'mailto:scubaseasons@gmail.com'} style={{ fontSize: '3vh', color: 'yellow'}}>
        Contact Us
      </div> 
      </div>

  </div>
  );
}

export default TopBar;
