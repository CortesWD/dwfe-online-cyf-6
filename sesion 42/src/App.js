/**
 * Dependencies
 */
import React, { useEffect, useState, useRef } from 'react';

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
  const [show, setShow] = useState(false);
  const btnRef = useRef();
  useEffect(() => {
    if (show) {
      const request = fetch('https://jsonplaceholder.typicode.com/users');
      request
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
        })
        .catch(err => console.error(err));
    }
  }, [show]);

  return (
    <section className='App'>
      <h1>Personas: </h1>
      <button ref={btnRef} type="button" onClick={() => setShow(!show)}>
        {`${!show ? 'mostrar' : 'ocultar'}`}
      </button>
      <hr />
      <div className="personas">
        {users.length > 0 ? (
          (users || []).map((item) => {
            return (
              <Persona
                key={item.id}
                nombre={item.name}
              />
            )
          })
        ) : (
          show && <p>trayendo datos de usuarios...</p>
        )}
      </div>
    </section>
  );
}

export default App;
