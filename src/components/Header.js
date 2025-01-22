import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">INFRABID</div>
      <nav className="nav">
        <a href="#">Equipment</a>
        <a href="#">Contracts</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </nav>
      <button className="sign-in">Sign In</button>
    </header>
  );
};

export default Header;
