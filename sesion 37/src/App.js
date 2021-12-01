/**
 * Dependencies
 */
import React, { useState } from 'react';

/**
 * Styles
 */
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = e => {
    const { target: { value } } = e;

    if (value !== '' && value.length > 10) {
      setTimeout(() => {
        if (value === 'test@test.com') {
          alert('email invalido')
        }
      }, 5000);
    }

    setEmail(e.target.value)
  }

  return (
    <>
      <form className="app">
        <div className="form-control">
          <label htmlFor="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}

          />
        </div>
        <button
          className="button"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </>
  );
}

export default App;
