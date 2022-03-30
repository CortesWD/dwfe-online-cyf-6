/**
 * Dependencies
 */
import React from 'react';

/**
 * Components
 */
import Filter from './components/Filter/Filter';

const list = ["perro", "gato", "avion", "murciélago"];

function App() {
  return (
    <div>
      <Filter list={list} itemToFilter="gato" />
    </div>
  );
}

export default App;
