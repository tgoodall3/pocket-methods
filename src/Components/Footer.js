import React from 'react';
import '../Styles/footer.css';
import FootLogo from '../Assets/images/pocket-tagline.png';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
        <img src={FootLogo} alt='logo' />
        <div className="social-icons">
            <a href="https://www.instagram.com/pocketmethods/'"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/pocket-methods-llc/"><FaLinkedin /></a>
            <a href="mailto:pocketmethods@gmail.com" className="email-icon">
              <FaEnvelope />
              {/* <span className="email-tooltip">pocketmethods@gmail.com</span> */}
            </a>
        </div>
    </footer>
  );
}

export default Footer;
