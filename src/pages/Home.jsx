import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import portrait from "../assets/Huilin.jpeg";
import cv from "../assets/Huilin_Huang_CV.pdf";
import { themes } from "../data/research";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" /> University of Virginia ·
            Environmental Sciences
          </span>
          <h1>
            Understanding fire
            <br />
            in a <em>changing</em>
            <br />
            world.
          </h1>
          <p>
            Exploring the connections between wildfire, ecosystems, and
            climate—from wildland landscapes to the communities that call them
            home.
          </p>
          <Link to="/research" className="button">
            Explore our research <FiArrowUpRight />
          </Link>
          <div className="hero-footnote">
            <span>THE Environmental Hazard & Climate Resilience LAB</span>
            <span>CHARLOTTESVILLE, VA</span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/fire-landscape.jpg"
            alt="Flames illuminating a landscape at night"
            fetchPriority="high"
          />
          <div className="image-topline">
            <span>FIRE · CLIMATE · ECOSYSTEMS</span>
            <span aria-hidden="true">↗</span>
          </div>
          <div className="image-caption">
            <span className="image-caption-line" />
            <p>
              Connected systems.
              <br />
              Shared futures.
            </p>
            <span>OBSERVATIONS × MODELS × MACHINE LEARNING</span>
          </div>
        </div>
      </section>
      <div className="research-strip">
        <div className="container">
          <span>OUR LENS</span>
          <span>Wildfire dynamics</span>
          <span className="strip-star" aria-hidden="true">
            ✳
          </span>
          <span>Land–atmosphere interactions</span>
          <span className="strip-star" aria-hidden="true">
            ✳
          </span>
          <span>Ecosystem resilience</span>
        </div>
      </div>
      <section className="container section research-overview">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / Our research</span>
            <h2>
              A changing planet.
              <br />
              Questions that connect us.
            </h2>
          </div>
          <p>
            We bring together observations, process-based models, and machine
            learning to understand environmental change across scales.
          </p>
        </div>
        <div className="theme-grid">
          {themes.map((theme, index) => (
            <Link
              to={"/research#" + theme.id}
              className="theme-card"
              key={theme.id}
            >
              <div className="theme-top">
                <span>0{index + 1}</span>
                <FiArrowUpRight />
              </div>
              <h3>{theme.title}</h3>
              <p>{theme.short}</p>
              <span className="theme-bottom">
                Explore this theme <FiArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="profile-section">
        <div className="container profile-grid">
          <div className="profile-image">
            <img src={portrait} alt="Dr. Huilin Huang" loading="lazy" />
            <span>HUILIN HUANG, Ph.D.</span>
          </div>
          <div className="profile-copy">
            <span className="eyebrow">
              02 / Meet the principal investigator
            </span>
            <h2>
              Connecting the dots
              <br />
              between fire & climate.
            </h2>
            <p className="profile-role">
              Dr. Huilin Huang{" "}
              <span>Assistant Professor · University of Virginia</span>
            </p>
            <p>
              My research examines how wildfire and land cover change interact
              with the carbon cycle and the atmosphere. I develop and apply
              Earth system models alongside satellite observations and machine
              learning to investigate these connected processes.
            </p>
            <p>
              Before joining UVA in 2025, I worked as an Earth Scientist and
              postdoctoral researcher at Pacific Northwest National Laboratory.
              I earned my Ph.D. in Geography from UCLA in 2021.
            </p>
            <div className="profile-actions">
              <Link className="text-link" to="/ourteam">
                Meet our people <FiArrowUpRight />
              </Link>
              <a
                className="text-link"
                href={cv}
                download="Huilin_Huang_CV_Dec2025.pdf"
              >
                Download CV <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 / Selected publications</span>
            <h2>Science in focus.</h2>
          </div>
          <Link className="text-link" to="/publications">
            All publications <FiArrowUpRight />
          </Link>
        </div>
        <Link to="/publications?q=canopy" className="featured-paper">
          <span className="paper-meta">
            EARTH’S FUTURE<span>2025</span>
          </span>
          <h3>
            Elevated forest canopy loss after wildfires in moist and cool
            forests in the Pacific Northwest
          </h3>
          <FiArrowUpRight aria-hidden="true" />
        </Link>
        <Link to="/publications?q=ML4Fire" className="featured-paper">
          <span className="paper-meta">
            GEOSCIENTIFIC MODEL DEVELOPMENT<span>2025</span>
          </span>
          <h3>ML4Fire-XGBv1.0: Improving North American wildfire prediction</h3>
          <FiArrowUpRight aria-hidden="true" />
        </Link>
        <div className="join-band">
          <div>
            <span className="eyebrow">Science is a shared endeavor</span>
            <h2>Let’s ask the next question.</h2>
            <p>
              Interested in wildfire, climate, and environmental change? Connect
              with our lab.
            </p>
          </div>
          <Link className="button" to="/opportunities">
            Get involved <FiArrowUpRight />
          </Link>
        </div>
      </section>
    </>
  );
}
