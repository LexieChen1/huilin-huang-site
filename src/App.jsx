import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"; 
import Research from "./pages/Research"; 
import Publications from "./pages/Publications"; 
import Teaching from "./pages/Teaching"; 
import CV from "./pages/CV"; 
import Contact from "./pages/contact"; 

function App() {
  return (
    <Router> 
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  ); 
}
export default App; 
