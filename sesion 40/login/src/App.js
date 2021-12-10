/**
 * Dependencies
 */
import React, { useState } from 'react';

/**
 * Components
 */
import Button from './components/button/Button';
import LoginForm from './components/loginForm/LoginForm';

/**
 * Styles
 */
import './App.css';


/**
 * Others
 */

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
