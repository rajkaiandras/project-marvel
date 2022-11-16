import React from 'react';

// styles
import './Header.css';

export const Header = () => {
  return (
    <header className="Header">
      <div className="logo">Marvel</div>
      <nav className="nav-bar">
        <a className="link" href="/">
          Home
        </a>
        <a className="link" href="/characters">
          Characters
        </a>
        <a className="link" href="/login">
          Log In
        </a>
        <a className="link" href="/signup">
          Sign Up
        </a>
      </nav>
    </header>
  );
};
