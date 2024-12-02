import emilio from '../content/EmilioNew.png';
import './emilioPage.css';

function EmilioPage() {
  return (
      <div style={{ display: 'flex', alignItems: "center", justifyContent: "center"}}>
      <img src={emilio} className='emilio'></img>
      </div>
  );
}

export default EmilioPage;
