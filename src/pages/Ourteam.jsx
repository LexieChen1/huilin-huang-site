import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import huilin from "../assets/Huilin.jpeg";
import cv from "../assets/Huilin_Huang_CV.pdf";
import "./OurTeam.css";

const members = [
  { name: "Zeyu Xia", initials: "ZX" },
  { name: "Lexie Chen", image: "/lexie.jpg" },
  { name: "Ra", initials: "R" },
];

export default function Ourteam() {
  return (
    <div className="container inner-page">
      <header className="page-intro">
        <span className="eyebrow">People / The minds behind the questions</span>
        <h1>
          Research is a<br />
          collective pursuit.
        </h1>
        <p>
          Meet the people exploring the relationships between wildfire,
          ecosystems, and climate at the University of Virginia.
        </p>
      </header>
      <section className="pi-profile">
        <img className="pi-photo" src={huilin} alt="Dr. Huilin Huang" />
        <div>
          <span className="eyebrow">Principal investigator</span>
          <h2>Dr. Huilin Huang</h2>
          <p className="pi-role">
            Assistant Professor
            <br />
            Department of Environmental Sciences · University of Virginia
          </p>
          <p>
            Huilin studies wildfire and land cover change, terrestrial carbon
            cycling and biogeochemistry, and land–atmosphere interactions. Her
            research combines numerical modeling, satellite observations, and
            machine learning.
          </p>
          <div className="profile-links">
            <a className="text-link" href="mailto:mgh4rc@virginia.edu">
              Email Huilin <FiArrowUpRight />
            </a>
            <a
              className="text-link"
              href={cv}
              download="Huilin_Huang_CV_Dec2025.pdf"
            >
              Download CV ↓
            </a>
          </div>
          <div className="pi-education">
            <span className="eyebrow">Education</span>
            <p>
              <strong>Ph.D. in Geography</strong> · UCLA, 2021
              <br />
              <strong>B.S. in Atmospheric Sciences</strong> · Nanjing
              University, 2015
            </p>
          </div>
        </div>
      </section>
      <section className="people-section">
        <span className="eyebrow">Our team</span>
        <h2>Curiosity, in good company.</h2>
        <div className="people-grid">
          {members.map((member) => (
            <article className="person" key={member.name}>
              {member.image ? (
                <img src={member.image} alt={member.name} loading="lazy" />
              ) : (
                <div className="person-initials" aria-hidden="true">
                  {member.initials}
                  <span>WILD–URBAN LANDSCAPE FIRE LAB</span>
                </div>
              )}
              <h3>{member.name}</h3>
              <span className="person-role">Research Assistant</span>
              <p>Computer Science · College of Arts and Sciences</p>
            </article>
          ))}
        </div>
      </section>
      <section className="split people-section">
        <div>
          <span className="eyebrow">Experience</span>
          <h2>
            A path through
            <br />
            Earth science.
          </h2>
          <div className="row-list">
            {[
              ["2025–present", "Assistant Professor", "University of Virginia"],
              [
                "2024–2025",
                "Earth Scientist",
                "Pacific Northwest National Laboratory",
              ],
              [
                "2021–2024",
                "Postdoctoral Researcher",
                "Pacific Northwest National Laboratory",
              ],
            ].map(([date, role, place]) => (
              <div className="detail-row" key={role}>
                <span className="detail-year">{date}</span>
                <div>
                  <h3>{role}</h3>
                  <p>{place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="eyebrow">Professional community</span>
          <h2>Service & collaboration.</h2>
          <p className="note">Selected roles listed in the December 2025 CV.</p>
          <ul className="plain-list">
            <li>
              Associate Editor, <em>Geophysical Research Letters</em> ·
              2025–present
            </li>
            <li>
              Early Career Editorial Board, <em>AGU Advances</em> · 2025–present
            </li>
            <li>
              Ecosystem Impacts Strategy Team, FireSat Earth Fire Alliance ·
              2025–present
            </li>
            <li>
              Advisory Board, WCRP–CMIP Fire Model Intercomparison Project ·
              2024–present
            </li>
            <li>
              Session Convener, Fire–Ecosystem Interaction in a Changing
              Environment · AGU 2025
            </li>
          </ul>
        </div>
      </section>
      <div className="join-band">
        <div>
          <h2>Bring your curiosity.</h2>
          <p>
            Interested in working with our group? We’d love to hear about your
            research interests.
          </p>
        </div>
        <Link className="button" to="/opportunities">
          Connect with us <FiArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
