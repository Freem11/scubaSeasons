import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css";
import Navbar from "./components/navbar/navbar.tsx";
import Footer from "./components/footer";
import Home from "./pages/Home";
import FAQ from "./pages/faq/FAQ.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/faq'} element={<FAQ />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
