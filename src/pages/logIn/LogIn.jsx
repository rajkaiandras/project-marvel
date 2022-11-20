import React, { useState } from 'react';

// hooks
import { useLogIn } from '../../hooks/useLogIn';

// styles
import './LogIn.css';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn, error, isPending } = useLogIn();

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);
  };

  return (
    <section className="LogIn">
      <form onSubmit={handleSubmit} className="log-in-form">
        <h2 className="log-in-title">Log In</h2>
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
        {!isPending && <button className="log-in-btn">Log In</button>}
        {isPending && (
          <button className="log-in-btn" disabled>
            Loading
          </button>
        )}
        {error && <p>{error}</p>}
      </form>
    </section>
  );
};
