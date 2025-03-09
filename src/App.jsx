import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";



function App() {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterComp/>
    </Router>
  );
}

export default App;
