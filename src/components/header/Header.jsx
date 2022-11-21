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
        <div className="logo">Marvel</div>
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
