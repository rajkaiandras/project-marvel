import React from 'react';

// styles
import './Intro.css';

export const Intro = () => {
  return (
    <div className="Intro">
      <div className="header-cover"></div>
      <div className="content-cover">
        <div className="title-container">
          <h1 className="hero-title">Heroes live among us</h1>
          <div className="hero-title-cover"></div>
        </div>
        <div className="subtitle-container">
          <h1 className="hero-subtitle">
            Discover the <span className="power-highlight">POWER</span> of comic
            books
          </h1>
          <div className="hero-subtitle-cover"></div>
        </div>
      </div>
      <div className="footer-cover"></div>
    </div>
  );
};
