import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="developer-container">
        <p className="developer-title">developed by</p>
        <Link to="/aboutme">
          <p className="developer-name">A.R.</p>
        </Link>
      </div>
    </footer>
  );
};
