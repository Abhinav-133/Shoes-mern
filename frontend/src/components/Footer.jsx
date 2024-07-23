// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          {/* <h2>Quick Links</h2> */}
          <ul>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms and Conditions</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 || Designed By: Abhinav Mittal</p>
      </div>
    </footer>
  );
};

export default Footer;
