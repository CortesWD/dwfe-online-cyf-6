/**
 * Dependencies
 */
import React from "react";
import { Link } from 'react-router-dom';
import { URLS } from '../../utils/constants';

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
            {/* <Link to="/">Home</Link> */}
            <Link to={URLS.home}>Home</Link>
          </li>
          <li>
            {/* <Link to="/cursos">Cursos</Link> */}
            <Link to={URLS.courses}>Cursos</Link>
          </li>
          <li>
            {/* <Link to="/eventos">Eventos</Link> */}
            <Link to={URLS.events}>Eventos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
