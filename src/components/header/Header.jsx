import React from 'react';
import { Link } from 'react-router-dom';

// styles
import './Header.css';

export const Header = () => {
  return (
    <header className="Header">
      <div className="logo">Marvel</div>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
};
