/**
 * Dependencies
 */
import React, { useEffect, useState } from 'react';

/**
 * Components
 */
import Persona from './components/persona/Persona';

/**
 * Styles
 */
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const request = fetch('https://jsonplaceholder.typicode.com/users');

    request
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch(err => console.error(err));

  }, []);
  
  return (
    <section className='App'>
      <h1>Personas: </h1>
      <div className="personas">
        {(users || []).map((item) => {
          return (
            <Persona
              key={item.id}
              nombre={item.name}
            />
          )
        })}
      </div>
    </section>
  );
}

export default App;
