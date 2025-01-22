import React from 'react';
import './Hero.css';
import heroImage from '../assets/landing_page.png'; // Replace with your actual image path

const Hero = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <header className="header">
        {/* Left Section: Logo and Navigation */}
        <div className="left-section">
          <nav className="nav">
            <a href="#">INFRABID</a>
            <a href="#">Equipment</a>
            <a href="#">Contracts</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </nav>
        </div>

        {/* Right Section: Sign In Button */}
        <div className="right-section">
          <button className="signin-button">Sign In</button>
        </div>
      </header>

      <div className="hero-content">
        <div className="hero-text">
          <h1>
            CONSTRUCTION SOLUTIONS, <span>MADE SIMPLE.</span>
          </h1>
          <p>
            Find the right construction equipment to rent and explore contract opportunities, all in one platform.
          </p>
        </div>
        <div className="hero-buttons">
          <button>Hire Equipment</button>
          <button>See Contracts</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
