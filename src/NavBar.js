import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
      <span className="bluelearn"><span className="purple">blue</span>learn</span>
      </div>
      <div className="navbar__links">
        <a href="#" className="navbar__link">Hire</a>
        <a href="#" className="navbar__link">Find</a>
        <a href="#" className="navbar__link">Community</a>
      </div>
      <button className="navbar__button">Download now</button>
    </nav>
  );
};

export default Navbar;