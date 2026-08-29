import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import Navbar from "./components/navbar/navbar.tsx";
import Footer from "./components/footer";
import Home from "./pages/Home";
import FAQ from "./pages/faq/FAQ.tsx";
import Support from './pages/support/Support.tsx';
import Suunto from './pages/Suunto/Suunto.tsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/faq'} element={<FAQ />} />
        <Route path={'/support'} element={<Support />} />
        <Route path={'/Suunto'} element={<Suunto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
