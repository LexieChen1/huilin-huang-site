import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import Teaching from "./pages/Teaching";
import Ourteam from "./pages/Ourteam";
import Opportunities from "./pages/Opportunities";
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
          <Route path="/opportunities" element={<Opportunities />} />
          <Route
            path="*"
            element={
              <div className="container inner-page">
                <header className="page-intro">
                  <span className="eyebrow">404 / Page not found</span>
                  <h1>A different path.</h1>
                  <p>
                    This page does not exist. Head back to the lab homepage to
                    continue exploring.
                  </p>
                </header>
                <Link className="button" to="/">
                  Back to home →
                </Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
