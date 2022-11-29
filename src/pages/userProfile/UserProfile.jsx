import React from 'react';

// assets

// hooks
import { useAuthContext } from '../../hooks/useAuthContext';

// styles
import './userProfile.css';

export const UserProfile = () => {
  const { user } = useAuthContext();

  return (
    <div className="UserProfile">
      <div className="profile-container">
        <h3 className="profile-title">Profile Details</h3>
        <i class="fa-regular fa-user"></i>
        <h4>Display name:</h4>
        <p>{user.displayName}</p>
        <h4>Email address:</h4>
        <p>{user.email}</p>
        <h4>Profile creation:</h4>
        <p>{user.metadata.creationTime}</p>
        <h4>Last sign in:</h4>
        <p>{user.metadata.lastSignInTime}</p>
      </div>
    </div>
  );
};
