import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { themes } from "../data/research";
import "./Research.css";

export default function Research() {
  return (
    <div className="container inner-page">
      <header className="page-intro">
        <span className="eyebrow">Research / Connecting scales & systems</span>
        <h1>
          Understanding extremes. 
          <br />Connecting Earth systems.
        </h1>
        <p>
          We study how climate extremes and environmental disturbances interact with terrestrial ecosystems and the atmosphere. We integrate observations, process-based modeling, and machine learning to understand the underlying mechanisms, feedbacks, and predictability of these interconnected processes, with a current emphasis on wildfire dynamics and impacts.
        </p>
      </header>
      <div className="research-methods">
        <span className="eyebrow">Our approach</span>
        <p>
          Observe the landscape.
          <br />
          Understand the process.
          <br />
          <em>Model what comes next.</em>
        </p>
        <div className="tags">
          <span className="tag">Remote sensing</span>
          <span className="tag">Process-based modeling</span>
          <span className="tag">Machine learning</span>
        </div>
      </div>
      {themes.map((theme, index) => (
        <section id={theme.id} className="research-detail" key={theme.id}>
          <span className="research-number">0{index + 1}</span>
          <div>
            <h2>{theme.title}</h2>
            <p>{theme.description}</p>
            <div className="tags">
              {theme.methods.map((method) => (
                <span className="tag" key={method}>
                  {method}
                </span>
              ))}
            </div>
          </div>
          <aside>
            <span className="eyebrow">Related work</span>
            <p>{theme.example}</p>
            <Link className="text-link" to="/publications">
              Explore publications <FiArrowUpRight />
            </Link>
          </aside>
        </section>
      ))}
      <section className="research-projects">
        <span className="eyebrow">From understanding to application</span>
        <h2>Selected funded projects</h2>
        <p className="note">Project information from the December 2025 CV.</p>
        <div className="row-list">
          <div className="detail-row">
            <span className="detail-year">2026–2028</span>
            <div>
              <h3>From prediction to practice</h3>
              <p>
                A high-resolution fire-response framework to enhance community
                resilience. UVA Environmental Institute · Principal
                Investigator.
              </p>
            </div>
          </div>
          <div className="detail-row">
            <span className="detail-year">2026–2028</span>
            <div>
              <h3>Next-generation forest fire modeling</h3>
              <p>
                Very-high-resolution remote sensing and deep learning. UVA
                Environmental Institute · Co-Principal Investigator.
              </p>
            </div>
          </div>
          <div className="detail-row">
            <span className="detail-year">2024–ongoing</span>
            <div>
              <h3>An integrated climate–ecosystem–wildfire model</h3>
              <p>
                Assessing the impact of energy systems on wildfires. U.S.
                Department of Energy · Co-Principal Investigator.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
