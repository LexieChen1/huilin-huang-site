import "./Teaching.css";

const courses = [
  [
    "2026",
    "Climate Extremes and Natural Hazards",
  ],
  [
    "2026",
    "Regional Climate and Land Surface Processes",
  ],
  [
    "2026",
    "Scientific Writing: From Craft to Practice",
  ],
];

const mentoring = [
  {
    title: "Graduate student mentoring",
    students: "Zeyu Xia (CS) · Jingfan Xia · Kejian Shi",
  },
  {
    title: "Undergraduate research mentoring",
    students: "Lexie Chen (CS)",
  },
  {
    title: "Graduate student committees",
    students:
      "Ginny Henderson · Jagdish Desai · Zejun Cui · Estel Valeanu (CEE) · Farzana Yasmin Ahmad (CS) · Nicholas Hanna · Michelle Nguyen",
  },
  {
    title: "Undergraduate advising",
    students: "Astrid Kaczmarzewski · Amilyn Estes · Elijah Hall",
  },
];

export default function Teaching() {
  return (
    <div className="container inner-page">
      <header className="page-intro">
        <span className="eyebrow">
          Teaching / Learning across disciplines
        </span>
        <h1>
          Making sense of
          <br />
          our changing environment.
        </h1>
        <p>
          Teaching and mentoring at the intersection of climate,
          ecosystems, and biophysical processes.
        </p>
      </header>

      <section>
        <span className="eyebrow">In the classroom</span>
        <h2>Teaching experience</h2>
        <div className="row-list">
          {courses.map(([year, title, institution]) => (
            <article
              className="detail-row course-row"
              key={title}
            >
              <span className="detail-year">{year}</span>
              <div>
                <h3>{title}</h3>
                <p>{institution}</p>
              </div>
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
            I mentor the next generation of scientists to think critically, pursue bold ideas, and address environmental challenges.
          </p>
        </div>

        <div>
          <h3>Mentoring at UVA</h3>
          {mentoring.map(({ title, students }) => (
            <div className="detail-row" key={title}>
              <span className="detail-year">2025–present</span>
              <div>
                <h3>{title}</h3>
                <p>{students}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
