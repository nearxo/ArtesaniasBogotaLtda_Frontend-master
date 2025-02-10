import React, { useState } from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { FaRegUserCircle } from 'react-icons/fa';
import { GiColumnVase } from 'react-icons/gi';

const InNavbar = ({ userName = "Usuario", userRole = "Cliente" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'var(--color-fondo)',
      padding: 'var(--espaciado-pequeno) var(--espaciado-grande)',
      boxShadow: 'var(--sombra-suave)',
      borderRadius: 'var(--radio-borde)',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: 'var(--fuente-mediana-grande)',
      fontFamily: 'var(--fuente-principal)',
      color: 'var(--color-primario)',
    },
    icon: {
      fontSize: 'var(--fuente-mediana)',
      color: 'var(--color-primario)',
      cursor: 'pointer',
      transition: 'var(--transicion)',
    },
    iconHover: {
      color: 'var(--color-hover)',
      transform: 'scale(1.1)',
    },
    userSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontFamily: 'var(--fuente-principal)',
      fontSize: 'var(--fuente-normal)',
      color: 'var(--color-negro)',
      cursor: 'pointer',
      position: 'relative',
    },
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      right: 0,
      backgroundColor: 'var(--color-fondo)',
      border: '1px solid var(--color-hover)',
      borderRadius: 'var(--radio-borde)',
      boxShadow: 'var(--sombra-suave)',
      listStyle: 'none',
      margin: '10px 0 0',
      padding: '10px 0',
      zIndex: 1000,
    },
    dropdownItem: {
      padding: '10px 20px',
    },
    dropdownLink: {
      textDecoration: 'none',
      color: 'var(--color-negro)',
      fontSize: 'var(--fuente-normal)',
      transition: 'var(--transicion)',
    },
    navbarEnd: {
      display: 'flex',
      gap: '20px'
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <GiColumnVase style={{ fontSize: 'var(--fuente-grande)', color: 'var(--color-secundario)' }} />
        <span>Artesanías Bogotá</span>
      </div>
      <div style={styles.navbarEnd}>
        <HiOutlineShoppingCart style={styles.icon} />
        <div style={styles.userSection} onClick={toggleMenu}>
          <FaRegUserCircle style={{ fontSize: 'var(--fuente-mediana)', color: 'var(--color-secundario)' }} />
          <span>{userName} ({userRole})</span>
          {isMenuOpen && (
            <ul style={styles.dropdownMenu}>
              <li style={styles.dropdownItem}>
                <a href="/profile" style={styles.dropdownLink}>Perfil</a>
              </li>
              <li style={styles.dropdownItem}>
                <a href="/settings" style={styles.dropdownLink}>Configuración</a>
              </li>
              <li style={styles.dropdownItem}>
                <a href="/logout" style={styles.dropdownLink}>Cerrar sesión</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default InNavbar;
