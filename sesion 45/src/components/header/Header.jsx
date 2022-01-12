/**
 * Dependencies
 */
import React from "react";
import { Link } from 'react-router-dom';

/**
 * Styles
 */
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cursos">Cursos</Link>
          </li>
          <li>
            <Link to="/eventos">Eventos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
