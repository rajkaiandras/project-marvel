import React, { useState } from 'react';

// custom hooks
import { useSignUp } from '../../hooks/useSignUp';

// styles
import './SignUp.css';

export const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp, error, isPending } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password, displayName);
  };

  return (
    <section className="SignUp">
      <form onSubmit={handleSubmit} className="sign-up-form">
        <h2 className="sign-up-title">Sign Up</h2>
        <label>
          <span>Display name</span>
          <input
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
            placeholder="Display name..."
          />
        </label>
        <label>
          <span>E-mail</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Your e-mail..."
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Your password..."
          />
        </label>
        {!isPending && <button className="sign-up-btn">Sign Up</button>}
        {isPending && (
          <button className="sign-up-btn" disabled>
            Loading
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </form>
    </section>
  );
};
