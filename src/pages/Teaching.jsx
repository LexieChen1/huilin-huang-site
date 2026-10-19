import "./Teaching.css";
const courses = [
  [
    "2026",
    "Climate Extremes and Natural Hazards",
    "Lead Instructor",
    "University of Virginia",
  ],
  [
    "2026",
    "Regional Climate and Land Surface Processes",
    "Lead Instructor",
    "University of Virginia",
  ],
  [
    "2026",
    "Scientific Wrting: From Craft to Practice",
    "Lead Instructor",
    "University of Virginia",
  ],  
];

export default function Teaching() {
  return (
    <div className="container inner-page">
      <header className="page-intro">
        <span className="eyebrow">Teaching / Learning across disciplines</span>
        <h1>
          Making sense of
          <br />
          our changing environment.
        </h1>
        <p>
          Teaching and mentoring at the intersection of climate, ecosystems, and
          biophysical processes.
        </p>
      </header>
      <section>
        <span className="eyebrow">In the classroom</span>
        <h2>Teaching experience</h2>
        <div className="row-list">
          {courses.map(([year, title, role, details]) => (
            <article className="detail-row course-row" key={title}>
              <span className="detail-year">{year}</span>
              <div>
                <h3>{title}</h3>
                <p>{details}</p>
              </div>
              <span className="tag">{role}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="mentoring-block split">
        <div>
          <span className="eyebrow">Beyond the classroom</span>
          <h2>
            Supporting the
            <br />
            next generation.
          </h2>
          <p>
            Research mentoring spans undergraduate and graduate study, with
            opportunities to connect computational tools to questions in
            environmental science.
          </p>
        </div>
        <div>
          <h3>Mentoring at UCLA</h3>
          <div className="detail-row">
            <span className="detail-year">2020–2021</span>
            <div>
              <h3>Graduate students</h3>
              <p>Khalil Ganem · Zhijiong Cao</p>
            </div>
          </div>
          <div className="detail-row">
            <span className="detail-year">2018–2020</span>
            <div>
              <h3>Undergraduate students</h3>
              <p>Min-Ying Li · Yuan Ma · Ziwei Li</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
