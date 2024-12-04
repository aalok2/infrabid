import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo Section */}
      <div className="footer-logo">
       <p>Infrabid</p> 
        <p>Copyright © 2023 Infrabid</p>
      </div>

      {/* Company Links */}
      <div className="footer-section">
        <h4>Company</h4>
        <a href="#">Home</a>
        <a href="#">Hire</a>
        <a href="#">Contracts</a>
      </div>

      {/* Legal Links */}
      <div className="footer-section">
        <h4>Legal</h4>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>

      {/* Contact Information */}
      <div className="footer-section footer-contact">
        <h4>Contact</h4>
        <a href="tel:+918900190000">
          <i className="fas fa-phone"></i> +91 - 89001 90000
        </a>
        <a href="mailto:sales.contracthire@gmail.com">
          <i className="fas fa-envelope"></i> sales.contracthire@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
