// src/components/AboutUs.jsx
import React from 'react';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Nosotros</h1>
          <p>
            Artesanías Bogotá es una tienda dedicada a ofrecer productos auténticos
            y tradicionales hechos a mano por artesanos locales. Nuestro objetivo
            es preservar y promover el arte y la cultura de Bogotá, proporcionando
            una plataforma para que los artesanos puedan compartir su talento y 
            creatividad con el mundo.
          </p>
          <p>
            Cada pieza en nuestra tienda es única y hecha con mucho cuidado y amor. 
            Creemos en la importancia de mantener vivas las tradiciones y en apoyar 
            a nuestros talentosos artesanos locales. Gracias por visitarnos y 
            apoyar el arte y la cultura de Bogotá.
          </p>
          <div className="image-container">
            <img src="./src/rsc/aboutus2.jpg" alt="About us 2" className="responsive-image" />
            <img src="./src/rsc/aboutus1.jpeg" alt="About us 1" className="responsive-image" />
          </div>
        </header>
      </div>
    </>
  );
};

export default AboutUs;
