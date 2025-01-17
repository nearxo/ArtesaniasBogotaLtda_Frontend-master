// src/components/LandingPage.jsx
import React from 'react';
import { GiColumnVase } from 'react-icons/gi';
import Navbar from './Navbar'; // Importar el nuevo componente InNavbar

const LandingPage = () => {
  return (
    <>
      <Navbar /> {/* Cambiar Navbar por InNavbar */}
      <div className="container">
        <header className="header">
          <h1>Artesanías Bogotá</h1>
          <p>
            Bienvenidos a nuestra tienda de artesanías auténticas de Bogotá.
            Encuentra productos únicos creados con amor y tradición.
          </p>
          <div className="icon-container">
            <GiColumnVase size={100} />
          </div>
        </header>
      </div>
    </>
  );
};

export default LandingPage;
