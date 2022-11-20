import React from 'react';
import { Link } from 'react-router-dom';

// hooks
import { useLogOut } from '../../hooks/useLogOut';

// styles
import './Header.css';

export const Header = () => {
  const { logOut } = useLogOut();

  return (
    <header className="Header">
      <Link to="/">
        <div className="logo">Marvel</div>
      </Link>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="#" onClick={logOut}>
          Log Out
        </Link>
      </nav>
    </header>
  );
};
