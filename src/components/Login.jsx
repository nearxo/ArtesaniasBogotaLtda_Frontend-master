import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirigir según el rol
import Navbar from './Navbar';
import '../styles/globals.css';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Usuarios de prueba
    const users = [
      { email: 'cliente@gmail.com', password: 'GrupoBArtesanias', role: 'client' },
      { email: 'administrador@gmail.com', password: 'GrupoBArtesanias', role: 'admin' },
      { email: 'tienda@gmail.com', password: 'GrupoBArtesanias', role: 'store' },
    ];

    // Validar credenciales
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      alert('Inicio de sesión exitoso');
      // Redirigir según el rol
      if (user.role === 'admin') navigate('/admin/home');
      if (user.role === 'client') navigate('/client/home');
      if (user.role === 'store') navigate('/store/home');
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="form-login">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="button">Iniciar Sesión</button>
        </form>
      </div>
    </>
  );
};

export default LogIn;
