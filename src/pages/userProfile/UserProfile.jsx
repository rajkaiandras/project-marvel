import React from 'react';

// hooks
import { useAuthContext } from '../../hooks/useAuthContext';

// styles
import './userProfile.css';

export const UserProfile = () => {
  const { user } = useAuthContext();

  return (
    <div className="UserProfile">
      <div className="profile-container">
        <h1>Profile Details</h1>
        <p>Display name:</p>
        <p>{user.displayName}</p>
        <p>Email address:</p>
        <p>{user.email}</p>
        <p>Profile creation:</p>
        <p>{user.metadata.creationTime}</p>
        <p>Last sign in:</p>
        <p>{user.metadata.lastSignInTime}</p>
      </div>
    </div>
  );
};
