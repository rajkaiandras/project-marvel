import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// hooks
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogOut } from '../../hooks/useLogOut';

// components
import { MarvelLogo } from '../../components/marvelLogo/MarvelLogo';

// styles
import './Header.css';

export const Header = () => {
  const { user } = useAuthContext();
  const { logOut } = useLogOut();

  // toggle navigation bar
  const [navBarVisibility, setNavBarVisibility] = useState(false);

  const toggleNavBar = () => {
    setNavBarVisibility(!navBarVisibility);
  };

  // prevent body scrolling when navigation bar is opened
  useEffect(() => {
    if (navBarVisibility) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [navBarVisibility]);

  return (
    <header className="Header">
      <MarvelLogo />

      <button onClick={toggleNavBar} className="mobile-nav-toggle">
        {navBarVisibility ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>

      <nav className={navBarVisibility ? 'nav-bar active' : 'nav-bar'}>
        <Link to="/" onClick={toggleNavBar}>
          Home
        </Link>
        <Link to="/comics" onClick={toggleNavBar}>
          Comics
        </Link>
        <Link to="/characters" onClick={toggleNavBar}>
          Characters
        </Link>

        {!user && (
          <>
            <Link to="/login" onClick={toggleNavBar}>
              Log In
            </Link>
            <Link to="/signup" onClick={toggleNavBar}>
              Sign Up
            </Link>
          </>
        )}

        {user && (
          <>
            <Link
              className="favorites-btn"
              to={'/favorites'}
              onClick={toggleNavBar}
            >
              Favorites
            </Link>
            <Link
              className="user-profile-btn"
              to={'/userprofile'}
              onClick={toggleNavBar}
            >
              {user.displayName}
            </Link>
            <Link
              className="log-out-btn"
              to="#"
              onClick={() => {
                toggleNavBar();
                logOut();
              }}
            >
              Log Out
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
