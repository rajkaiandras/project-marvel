import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// hooks
import { useLogOut } from '../../hooks/useLogOut';
import { useAuthContext } from '../../hooks/useAuthContext';

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
          <i class="fa-solid fa-xmark"></i>
        ) : (
          <i class="fa-solid fa-bars"></i>
        )}
      </button>

      <nav className={navBarVisibility ? 'nav-bar active' : 'nav-bar'}>
        <Link to="/">Home</Link>
        <Link to="/comics">Comics</Link>
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
