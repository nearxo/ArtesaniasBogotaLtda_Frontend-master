// src/components/Contact.jsx
import React from 'react';
import Navbar from './Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <header className="header">
          <h1>Contacto</h1>
          <p>
            Si tienes alguna pregunta o necesitas más información, no dudes en 
            contactarnos. Estaremos encantados de ayudarte.
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="button">Enviar</button>
          </form>
        </header>
      </div>
    </>
  );
};

export default Contact;
