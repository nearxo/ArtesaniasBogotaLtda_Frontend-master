import React, { useState } from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FaRegUserCircle } from 'react-icons/fa';
import { GiColumnVase } from 'react-icons/gi';
import '../styles/globals.css'; // Ruta corregida para importar globals.css

const InNavbar = ({ userName = "Usuario", userRole = "Cliente" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <GiColumnVase />
        Artesanías Bogotá
      </div>
      <div className="navbar-icons">
        <HiOutlineShoppingCart className="navbar-cart" />
        <div className="navbar-user" onClick={toggleMenu}>
          <FaRegUserCircle className="navbar-profile" />
          <span>{userName} ({userRole})</span>
          {isMenuOpen && (
            <ul className="navbar-dropdown-menu">
              <li><a href="/profile">Perfil</a></li>
              <li><a href="/settings">Configuración</a></li>
              <li><a href="/logout">Cerrar sesión</a></li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default InNavbar;
