import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 
import Home from "./pages/Home"; 
import Research from "./pages/Research"; 
import Publications from "./pages/Publications"; 
import Teaching from "./pages/Teaching"; 
import Ourteam from "./pages/Ourteam"; 
function App() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/ourteam" element={<Ourteam />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  ); 
}
export default App; 
