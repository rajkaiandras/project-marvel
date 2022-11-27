import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// components
import { Subscription } from '../subscription/Subscription';

// styles
import './Footer.css';

export const Footer = () => {
  const [subscriptionVisibility, setSubscriptionVisibility] = useState(false);

  const closeSubscription = () => {
    setSubscriptionVisibility(false);
  };

  return (
    <footer className="Footer">
      <div className="developer-container">
        <p className="developer-title">developed by</p>
        <a href="http://www.linkedin.com/in/andrasrajkai">
          <p className="developer-name">A.R.</p>
        </a>
      </div>
      <div className="footer-links-container">
        <Link to="/aboutme">about me</Link>
        <Link to="/contacts">contacts</Link>
        <p
          onClick={() => {
            setSubscriptionVisibility(!subscriptionVisibility);
          }}
        >
          subscription
        </p>
        {subscriptionVisibility && (
          <Subscription closeSubscription={closeSubscription} />
        )}
      </div>
    </footer>
  );
};
