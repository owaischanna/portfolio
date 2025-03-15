import React from "react";
import "./css/Team.css";

// Import your team member images
import abuBakarImage from "./assets/zain.jpg"; // Update with your actual image names
import owaisAhmedImage from "./assets/pp.jpeg"; // Update with your actual image names

const Team = () => {
  return (
    <section className="team">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-cards">
        <div className="team-card">
          <img src={abuBakarImage} alt="Abu Bakar" className="team-photo" />
          <h3>Zain Asghar</h3>
          <p className="team-role">Backend Developer</p>
          <p className="team-experience">2+ Years Experience</p>
          <p className="team-description">
            A dedicated web developer with a passion for creating efficient and
            user-friendly web applications.
          </p>
        </div>
        <div className="team-card">
          <img src={owaisAhmedImage} alt="Owais Ahmed" className="team-photo" />
          <h3>Abu Bakkar</h3>
          <p className="team-role">Full-Stack Developer</p>
          <p className="team-experience">2+ Years Experience</p>
          <p className="team-description">
            A skilled web developer known for his innovative solutions and
            commitment to delivering high-quality work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
