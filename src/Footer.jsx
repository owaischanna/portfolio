import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a
            href="https://web.facebook.com/profile.php?id=100095018828102"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Facebook
          </a>
          {/* <a
            href="https://www.linkedin.com/in/owais-ahmedc/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Twitter
          </a> */}
          {/* <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram
          </a> */}
          <a
            href="https://www.linkedin.com/in/owais-ahmedc/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
        </div>
        <div className="footer-contact">
          <p>
            Email:{" "}
            <a href="mailto:example@example.com" className="contact-link">
              aowais986@gmail.com
            </a>
          </p>
          <p>
            Whatsapp:{" "}
            <a href="tel:+923249754112" className="contact-link">
              +923249754112
            </a>
          </p>
        </div>
        <p className="footer-copy">© 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
