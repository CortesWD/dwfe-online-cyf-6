/**
 * Dependencies
 */
import React from 'react';

/**
 * Styles
 */
import './Persona.css';

function Persona({ nombre }) {
  return (
    <div className='persona'>
      <p>{nombre}</p>
    </div>
  )
}

export default Persona;