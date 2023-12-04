import React from "react";
import {
  FaCopyright,
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-logo">
          <h1>Sarhan</h1>
          <p>
            <FaCopyright /> All rights reserved
          </p>
        </div>

        <div className="contact-section">
          <h5>Contact Me</h5>
          <div className="contact-icons">
            <div className="contact-item">
              <a href="https://wa.me/+918511416680">
                <FaWhatsapp />
              </a>
            </div>
            <div className="contact-item">
              <a
                href=
                "https://www.linkedin.com/in/sarhan-patel-20241c"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="contact-item">
              <a href="mailto:sp.webdev2024@gmail.com?...">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
