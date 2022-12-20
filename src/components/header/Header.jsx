import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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

  // style of active Router NavLink
  let activeStyle = {
    color: 'red',
  };

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
        <NavLink
          to="/"
          onClick={toggleNavBar}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/comics"
          onClick={toggleNavBar}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Comics
        </NavLink>
        <NavLink
          to="/characters"
          onClick={toggleNavBar}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Characters
        </NavLink>

        {!user && (
          <>
            <NavLink
              to="/login"
              onClick={toggleNavBar}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Log In
            </NavLink>
            <NavLink
              to="/signup"
              onClick={toggleNavBar}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign Up
            </NavLink>
          </>
        )}

        {user && (
          <>
            <NavLink
              className="favorites-btn"
              to={'/favorites'}
              onClick={toggleNavBar}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Favorites
            </NavLink>
            <NavLink
              className="user-profile-btn"
              to={'/userprofile'}
              onClick={toggleNavBar}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {user.displayName}
            </NavLink>
            <NavLink
              className="log-out-btn"
              to="#"
              onClick={() => {
                toggleNavBar();
                logOut();
              }}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Log Out
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};
