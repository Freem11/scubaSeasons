import { useMediaQuery } from 'react-responsive';

function DesktopVersion() {
  const isDesktop = useMediaQuery({ query: '(min-width: 880px)' });

  return (
    <div style={{position: 'relative', display: 'flex', alignItems: "center", justifyContent: 'center', marginTop: isDesktop ? '-10%' : '-20%'}}>
      <iframe frameBorder="0" style={{width: '95vw', height: "90%", borderRadius: 10}} src="https://scubaseasons.netlify.app/">
      </iframe>
    </div>
  );
}
export default DesktopVersion;
