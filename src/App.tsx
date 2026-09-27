import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/navbar/navbar.tsx";
import Footer from "./components/footer";
import Home from "./pages/Home";
import FAQ from "./pages/faq/FAQ.tsx";
import Support from './pages/support/Support.tsx';
import Suunto from './pages/Suunto/Suunto.tsx';
import VideoSandbox from './pages/videoToPhoto/index.tsx';
import { useMediaQuery } from 'react-responsive';

// Helper component that scrolls to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
    const isMobile = useMediaQuery({
  query: "(max-width: 1024px), (hover: none), (pointer: coarse)",
});

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/faq'} element={<FAQ />} />
        <Route path={'/support'} element={<Support />} />
        <Route path={'/Suunto'} element={<Suunto />} />
        <Route path={'/VideoConverter'} element={!isMobile ? <VideoSandbox /> : <Home />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;