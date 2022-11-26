import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="developer-container">
        developed by <span className="developer-name">András Rajkai</span>
      </div>
      <div className="footer-links-container">
        <Link to="/aboutme">about me</Link>
        <Link to="/contacts">contacts</Link>
      </div>
    </footer>
  );
};
