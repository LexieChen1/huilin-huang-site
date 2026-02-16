import "./Research.css";
import researchImage from "../assets/WUI.jpg";

export default function Research() {
  return (
    <>
      <h1>Research Focus</h1>
      <div className="title-divider" />

      <section className="research-section">
        {/* LEFT TEXT */}
        <div className="research-text">
          <p className="research-lead">
            We investigate how terrestrial ecosystems respond to and shape
            environmental change under a warming climate. Our work combines
            field observations, Earth system models, and data-driven methods
            to uncover mechanisms governing wildfire dynamics, carbon cycling,
            and land–atmosphere feedbacks.
          </p>

          <p>
            By integrating process-based modeling with machine learning,
            we aim to improve predictive understanding of wildfire risk,
            ecosystem resilience, and biogeochemical feedbacks at regional
            to continental scales.
          </p>

          <div className="research-themes">
            <h3>Core Research Themes</h3>

            <ul>
              <li>
                <strong>Wildfire and Land Cover Change</strong>
                <span>
                  Quantifying post-fire canopy loss, vegetation recovery,
                  and climate-driven shifts in disturbance regimes.
                </span>
              </li>

              <li>
                <strong>Terrestrial Carbon Cycle and Biogeochemistry</strong>
                <span>
                  Understanding carbon–nitrogen feedbacks and ecosystem
                  responses to climate extremes.
                </span>
              </li>

              <li>
                <strong>Land Surface Modeling and Land–Atmosphere Interaction</strong>
                <span>
                  Developing and applying coupled regional climate–land
                  models to study feedback mechanisms across scales.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="research-image">
          <img src={researchImage} alt="Wildfire research" />
        </div>
      </section>
    </>
  );
}
