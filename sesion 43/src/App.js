/**
 * Dependencies
 */
import React from 'react';

/**
 * Components
 */
import LoginForm from './components/loginForm/LoginForm';

/**
 * Styles
 */
import './App.css';

function App() {
  return (
    <section className='app'>
      <div className="container">
        <LoginForm />
      </div>
    </section>
  );
}

export default App;
