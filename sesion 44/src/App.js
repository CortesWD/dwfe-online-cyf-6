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
import Card from './components/card/Card';
import { useWindowResize } from './hooks/useWindowResize';

function App() {
  const width = useWindowResize();

  return (
    <section className='app'>
      <div className="container">
        <LoginForm />
      </div>
      <div className='container'>
        {width < 400 && (
          <Card>
            visible solo en mobile
          </Card>
        )}
      </div>
    </section>
  );
}

export default App;
