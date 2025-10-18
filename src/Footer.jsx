import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

    const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

const Footer = () => {
  return (
    <footer className="footer" id="Contact">
      <div className="footer-container">
        <div className="footer-section">
          <h3 data-aos="fade-up">AiNEKO</h3>
          <p data-aos="fade-up">Helping cats and their families create harmonious homes through understanding, compassion, and proven behavioral solutions.</p>
          <div className="social-icons" data-aos="fade-up">
            <a href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>

        <div className="footer-section" data-aos="fade-up">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about" onClick={(e) => {e.preventDefault(); scrollToSection("About");}}>About</a></li>
            <li><a href="#causes" onClick={(e) => {e.preventDefault(); scrollToSection("Causes");}}>Causes</a></li>
            <li><a href="#Product" onClick={(e) => {e.preventDefault(); scrollToSection("Product");}}>Our Product</a></li>
            <li><a href="#qna" onClick={(e) => {e.preventDefault(); scrollToSection("QnA");}}>Ask us anything</a></li>
            <li><a href="#Marketing" onClick={(e) => {e.preventDefault(); scrollToSection("Marketing");}}>Deals For You</a></li>
          </ul>
        </div>

        <div className="footer-section" data-aos="fade-up">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Behavior Guide</a></li>
            <li><a href="#">Product Reviews</a></li>
            <li><a href="#">Success Stories</a></li>
            <li><a href="#">Veterinarian Directory</a></li>
            <li><a href="#">Emergency Help</a></li>
          </ul>
        </div>

        <div className="footer-section" data-aos="fade-up">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="mailto:kabotcare@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} /> kabotcare@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:1-800-CAT-HELP">
                <FontAwesomeIcon icon={faPhone} /> 1-800-CAT-HELP
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 AiNEKO. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        <p>Trusted by veterinarians and cat owners worldwide</p>
      </div>
    </footer>
  );
};

export default Footer;