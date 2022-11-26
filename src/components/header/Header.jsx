import React from 'react';
import { Link } from 'react-router-dom';

// hooks
import { useLogOut } from '../../hooks/useLogOut';
import { useAuthContext } from '../../hooks/useAuthContext';

// styles
import './Header.css';

export const Header = () => {
  const { logOut } = useLogOut();
  const { user } = useAuthContext();

  return (
    <header className="Header">
      <Link to="/">
        <div className="logo">
          <span className="logo-letter-m">M</span>
          <span className="logo-letter-a">A</span>
          <span className="logo-letter-r">R</span>
          <span className="logo-letter-v">V</span>
          <span className="logo-letter-e">E</span>
          <span className="logo-letter-l">L</span>
        </div>
      </Link>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>

        {!user && (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}

        {user && (
          <>
            <Link className="favorites-btn" to={'/favorites'}>
              Favorites
            </Link>
            <Link className="user-profile-btn" to={'/userprofile'}>
              {user.displayName}
            </Link>
            <Link className="log-out-btn" to="#" onClick={logOut}>
              Log Out
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
