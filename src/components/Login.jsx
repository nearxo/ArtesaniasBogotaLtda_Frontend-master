// src/components/LogIn.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Importa el componente Navbar
import '../styles/globals.css';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enviar los datos del formulario a un endpoint (ajustar la URL según sea necesario)
      await axios.post('https://tuapi.com/login', formData);
      alert('Inicio de sesión exitoso');
    } catch (error) {
      console.error('Error al iniciar sesión', error);
      alert('Error al iniciar sesión');
    }
  };

  return (
    <>
      <Navbar /> {/* Añade la Navbar aquí */}
      <div className="form-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="form-login">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="button">Iniciar Sesión</button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
