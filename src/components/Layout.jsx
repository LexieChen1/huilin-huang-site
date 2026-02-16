import { Outlet, NavLink } from "react-router-dom";
import { FaXTwitter, FaGithub, FaEnvelope, FaGoogle } from "react-icons/fa6";
import sidebarImage from "../assets/wildfire.jpg";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      {/* PAGE CONTENT */}
      <main className="main">
        <div className="content">
          <Outlet />
        </div>
      </main>
      {/* SIDEBAR */}
      <aside
        className="sidebar"
        style={{ backgroundImage: `url(${sidebarImage})` }}
      >
        <div className="sidebar-overlay">
          
          {/* TOP */}
          <div className="sidebar-top">
            <h1 className="lab-title">Wildland Urban Interface Fire</h1>
            <p className="lab-sub">Huilin Huang</p>
            <p className="lab-sub">University of Virginia</p>

            <nav className="side-nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/research">Research</NavLink>
              <NavLink to="/publications">Publications</NavLink>
              <NavLink to="/teaching">Teaching</NavLink>
              <NavLink to="/ourteam">Our Team</NavLink>
            </nav>
          </div>

          {/* BOTTOM (SOCIAL MEDIA) */}
          <div className="sidebar-footer">
            <div className="social-icons">
              <a href="https://x.com" target="_blank" rel="noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="mailto:mgh4rc@virginia.edu">
                <FaEnvelope />
              </a>
              <a href="https://scholar.google.com" target="_blank" rel="noreferrer">
                <FaGoogle />
              </a>
            </div>

            <div className="sidebar-line" />
          </div>

        </div>
      </aside>
    </div>
  );
}
