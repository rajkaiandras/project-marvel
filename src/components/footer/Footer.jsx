import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="developer-container">
        <p className="developer-title">developed by</p>
        <a href="http://www.linkedin.com/in/andrasrajkai">
          <p className="developer-name">AR</p>
        </a>
      </div>
      <div className="footer-links-container">
        <Link to="/aboutme">about me</Link>
        <Link to="/contacts">contacts</Link>
      </div>
    </footer>
  );
};
