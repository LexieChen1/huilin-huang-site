import { useState } from "react";
import "./OurTeam.css";
import huilin from "../assets/Huilin.jpeg";
import lexie from "../assets/lexie.png"


const teamMembers = [
  {
    name: "Dr. Huilin Huang",
    title: "Assistant Professor",
    image: huilin,
    details: [
      "Department of Environmental Sciences",
      "University of Virginia",
      "Office: Clark Hall, Room 123",
      "Email: huilin.huang@virginia.edu",
      "Research: Ecohydrology, land–atmosphere interactions",
    ],
  },
  {
    name: "Zeyu Xia",
    title: "Research Assistant",
    // image: huilin,
    details: [
      "Computer Science Student in the College of Arts and Science",
    ],
  },
  {
    name: "Lexie Chen",
    title: "Research Assistant",
    image: lexie,
    details: [
      "Computer Science Student in the College of Arts and Science",
    ],
  },
  {
    name: "Ra",
    title: "Research Assistant",
    // image: huilin,
    details: [
      "Computer Science Student in the College of Arts and Science",
    ],
  },
];

export default function Ourteam() {
  return (
    <section className="team-page">
      <h1 className="heading-font">Our Team</h1>
      <div className="title-divider" />
      <div className="team-grid">
        {teamMembers.map((m, i) => (
          <FlipCard key={i} member={m} />
        ))}
      </div>
    </section>
  );
}

function FlipCard({ member }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        {/* FRONT */}
        <div className="flip-card-front">
          <img src={member.image} alt={member.name} />
          <h3>{member.name}</h3>
          <p>{member.title}</p>
        </div>

        {/* BACK */}
        <div className="flip-card-back">
          <h3>{member.name}</h3>
          <ul>
            {member.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
