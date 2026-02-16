import "./Teaching.css"; 

export default function Teaching() {
  return (
    <>
      <h1>Teaching</h1>
      <div className="title-divider" />

      <section className="teaching-section">
        <h2 className="section-title">Teaching Experience</h2>

        <div className="teaching-item">
          <span className="year">2026</span>
          <div>
            <p className="course-title">
              Climate Extremes and Natural Hazards
            </p>
            <p className="role">Lead Instructor</p>
          </div>
        </div>

        <div className="teaching-item">
          <span className="year">2019–2020</span>
          <div>
            <p className="course-title">
              People and Earth’s Ecosystems
            </p>
            <p className="role">Teaching Assistant</p>
          </div>
        </div>

        <div className="teaching-item">
          <span className="year">2018–2020</span>
          <div>
            <p className="course-title">
              Introduction to Biophysical Modeling of Land Surface Processes
            </p>
            <p className="role">Teaching Assistant</p>
          </div>
        </div>

        <div className="teaching-item">
          <span className="year">2021</span>
          <div>
            <p className="course-title">
              Human Impact on Biophysical Environment
            </p>
            <p className="role">Teaching Assistant</p>
          </div>
        </div>
      </section>

      <section className="mentoring-section">
        <h2 className="section-title">Mentoring</h2>

        <div className="mentoring-group">
          <p className="mentoring-year">2025–Present</p>
          <ul>
            <li>Zeyu Xia – Graduate Student</li>
            <li>Lexie Chen – Undergraduate Student</li>
          </ul>
        </div>

        <div className="mentoring-group">
          <p className="mentoring-year">Graduate Student Committees</p>
          <ul>
            <li>Ginny Henderson</li>
            <li>Jagdish Desai</li>
          </ul>
        </div>

        <div className="mentoring-group">
          <p className="mentoring-year">Undergraduate Advising</p>
          <ul>
            <li>Astrid Kaczmarzewski</li>
            <li>Amilyn Estes</li>
            <li>Elijah Hall</li>
          </ul>
        </div>
      </section>
    </>
  );
}
