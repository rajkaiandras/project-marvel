import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './MarvelLogo.css';

export const MarvelLogo = () => {
  return (
    <Link to="/">
      <div className="MarvelLogo">
        <span className="logo-letter-m">M</span>
        <span className="logo-letter-a">A</span>
        <span className="logo-letter-r">R</span>
        <span className="logo-letter-v">V</span>
        <span className="logo-letter-e">E</span>
        <span className="logo-letter-l">L</span>
      </div>
    </Link>
  );
};
