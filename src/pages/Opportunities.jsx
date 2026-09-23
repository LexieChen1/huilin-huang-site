import { FiArrowUpRight } from "react-icons/fi";

export default function Opportunities() {
  return (
    <div className="container inner-page">
      <header className="page-intro">
        <span className="eyebrow">Opportunities / Start a conversation</span>
        <h1>
          Big questions.
          <br />
          New perspectives.
        </h1>
        <p>
          Interested in the connections between wildfire, climate, and
          ecosystems? Get in touch to discuss research interests and possible
          ways to work together.
        </p>
      </header>
      <div className="split">
        <section>
          <span className="eyebrow">Students & researchers</span>
          <h2>
            Explore a shared
            <br />
            research direction.
          </h2>
          <p>
            Tell us about your background, the questions you want to
            investigate, and your experience or interests in environmental
            science, numerical modeling, remote sensing, or machine learning.
          </p>
          <p>
            For inquiries about potential graduate, undergraduate, or
            postdoctoral opportunities, please contact Dr. Huilin Huang
            directly.
          </p>
          <p className="note">
            Contact the lab for current availability and funding information.
          </p>
        </section>
        <section>
          <span className="eyebrow">Collaborators</span>
          <h2>
            Connect ideas
            <br />
            across disciplines.
          </h2>
          <p>
            Our research connects fire dynamics, land–atmosphere interactions,
            and terrestrial biogeochemistry. We welcome conversations about
            complementary observations, modeling approaches, and environmental
            questions.
          </p>
          <div className="tags">
            <span className="tag">Wildfire</span>
            <span className="tag">Earth system science</span>
            <span className="tag">Machine learning</span>
          </div>
        </section>
      </div>
      <div className="join-band">
        <div>
          <span className="eyebrow">Contact the principal investigator</span>
          <h2>Dr. Huilin Huang</h2>
          <p>Department of Environmental Sciences · University of Virginia</p>
        </div>
        <a
          className="button"
          href="mailto:mgh4rc@virginia.edu?subject=Research%20inquiry"
        >
          Email Huilin <FiArrowUpRight />
        </a>
      </div>
    </div>
  );
}
