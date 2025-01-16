// src/components/Navbar.jsx
import React from 'react';
import { GiColumnVase } from 'react-icons/gi';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={scrollToTop}>
        <GiColumnVase />
        Artesanías Bogotá
      </div>
      <ul>
        <li>
          <RouterLink to="/" onClick={scrollToTop}>Inicio</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">Nosotros</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">Contacto</RouterLink>
        </li>
      </ul>
      <RouterLink to="/login">
        <button className="button">Iniciar Sesión</button>
      </RouterLink>
      <RouterLink to="/signup">
        <button className="button">Registrarse</button>
      </RouterLink>
    </nav>
  );
};

export default Navbar;

