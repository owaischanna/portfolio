import React from "react";
import "./css/Expertise.css";
import {
  FaCode,
  FaShoppingCart,
  FaDatabase,
  FaServer,
  FaRocket,
  FaProjectDiagram,
  FaUserTie,
  FaLock, // Importing icon for website security
} from "react-icons/fa"; // Importing icons

const Expertise = () => {
  return (
    <section className="expertise" id="services">
      <h2 className="expertise-title">My Expertise & Services</h2>
      <div className="expertise-cards">
        <div className="expertise-card">
          <FaCode className="expertise-icon" />
          <h3>Web Development</h3>
          <p>
            Creating stunning and efficient websites with a focus on user
            experience and performance.
          </p>
        </div>
        <div className="expertise-card">
          <FaShoppingCart className="expertise-icon" />
          <h3>E-commerce Websites</h3>
          <p>
            Developing scalable e-commerce platforms with seamless integration
            for online businesses.
          </p>
        </div>
        <div className="expertise-card">
          <FaServer className="expertise-icon" />
          <h3>Backend APIs</h3>
          <p>
            Building robust and secure RESTful APIs to power your web
            applications and mobile apps.
          </p>
        </div>
        <div className="expertise-card">
          <FaDatabase className="expertise-icon" />
          <h3>Databases</h3>
          <p>
            Expertise in database design and management for efficient data
            handling and retrieval.
          </p>
        </div>
        <div className="expertise-card">
          <FaRocket className="expertise-icon" />
          <h3>Website Optimization</h3>
          <p>
            Improving website speed, performance, and SEO to ensure the best
            user experience.
          </p>
        </div>
        {/* New Expertise Card */}
        <div className="expertise-card">
          <FaLock className="expertise-icon" />
          <h3>Website Security</h3>
          <p>
            Implementing security measures to protect websites from threats and
            vulnerabilities.
          </p>
        </div>
      </div>
      <div className="expertise-stats">
        <div className="stat">
          <FaProjectDiagram className="stat-icon" />
          <h4>2+ Years</h4>
          <p>Experience</p>
        </div>
        <div className="stat">
          <FaProjectDiagram className="stat-icon" />
          <h4>20+ Projects</h4>
          <p>Completed</p>
        </div>
        <div className="stat">
          <FaUserTie className="stat-icon" />
          <h4>20+ Clients</h4>
          <p>Satisfied</p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
