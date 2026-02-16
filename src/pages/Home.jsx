import profImage from "../assets/Huilin.jpeg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <h1>The Wild-Urban Landscape Fire Lab</h1>
      <div className="title-divider" />

      <section className="home-content">

        {/* LEFT COLUMN */}
        <div className="home-left">
          <img
            src={profImage}
            alt="Dr. Huilin Huang"
            className="prof-photo"
          />

          <div className="home-highlights">
            <h3>Research Highlights</h3>
            <ul>
              <li>Climate–wildfire feedback mechanisms</li>
              <li>Terrestrial carbon–nitrogen interactions</li>
              <li>Regional climate–land surface coupling</li>
              <li>Machine learning for wildfire prediction</li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="home-text">
          <h2>Dr. Huilin Huang</h2>

          <p className="prof-title">
            Assistant Professor<br />
            Department of Environmental Sciences<br />
            University of Virginia
          </p>

          <p className="prof-contact">
            Clark Hall, Room 291<br />
            Email: <a href="mailto:mgh4rc@virginia.edu">mgh4rc@virginia.edu</a>
          </p>

          <p>
            Dr. Huang’s research focuses on understanding how climate change
            alters wildfire dynamics, land surface processes, and ecosystem
            resilience.
          </p>

          <p>
            The lab combines regional climate models, machine learning,
            and observational datasets to investigate wildfire risk,
            post-fire canopy loss, carbon cycling, and land-atmosphere interactions.
          </p>
        </div>

      </section>
    </>
  );
}
