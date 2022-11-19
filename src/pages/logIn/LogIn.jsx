import React, { useState } from 'react';

// styles
import './LogIn.css';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
        <button className="log-in-btn">Login</button>
      </form>
    </section>
  );
};
