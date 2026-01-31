import heroImage from "../assets/wildfire.jpg";
import profImage from "../assets/Huilin.jpeg";
import "./Home.css"; 

export default function Home() {
  return (
    <>
      {/* hero Section */}
      <section 
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <h1>Ecological Climatology & Global Change</h1>
          <h2>Department of Environmental Sciences</h2>
          <p>University of Virginia</p>
        </div>
      </section>

      {/* main content */}
      <section className="page home-content">
        <img 
          src={profImage}
          alt="Dr. Huilin Huang"
          className="prof-photo"
        />

        <div className="home-text">
          <h2 className="prof-name">Dr. Huilin Huang</h2>
          <p className="prof-title">
            Assistant Professor, Department of Environmental Science
            University of Virginia
          </p>
          <p className="prof-contact">
            Clark Hall, Room 291<br />
            Email: <a href="mailto:mgh4rc@virginia.edu">mgh4rc@virginia.edu</a>
          </p>
          <p>
              placeholder
            </p>
          </div>
      </section>
    </>
  ); 
}