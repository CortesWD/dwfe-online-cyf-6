/**
 * Dependencies
 */
import React from "react";
import { Link } from 'react-router-dom';

function List({ cursos }) {
  return (
    <div>
      <h2>Cursos</h2>
      <ul className="curso">
        {cursos.map(({ id, name, url }) => (
          <li key={id}>
            <Link to={`/cursos/${url}`} >{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List;