import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import images from '../images.json';

const Footer = () => {
  const logoUrl = images[2] || "https://static.wixstatic.com/media/67cb39_c012f3a8556142c0a1efc141568ed0df~mv2.png";

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <img src={logoUrl} alt="Biryani Brews Logo" className="footer-logo" />
          <p className="address">Anchorvale Village, #B1-21, Singapore 540339</p>
          <p className="phone">+65 69313230</p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <a href="#">Contact Us</a>
          <a href="#">FAQ & Help Center</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 by Biryanibrews.sg</p>
        <div className="legal-links">
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
