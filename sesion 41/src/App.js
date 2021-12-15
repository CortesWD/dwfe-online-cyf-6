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
  const [show, setShow] = useState(true);

  return (
    <section className='app'>
      <div className="container">
        <Button onClick={() => setShow(!show) }>Mostrar</Button>
        {show ? <LoginForm /> : null}
      </div>
    </section>
  );
}

export default App;
