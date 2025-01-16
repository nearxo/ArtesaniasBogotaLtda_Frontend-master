// src/components/SignUp.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import '../styles/globals.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    apellido: '',
    tipoDocumento: '',
    numeroDocumento: '',
    departamento: '',
    ciudad: '',
    direccion: '',
    telefono: '',
    contraseña: '',
    repetirContraseña: '',
    consentimiento: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.contraseña !== formData.repetirContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }
    try {
      await axios.post('https://tuapi.com/registro', formData);
      alert('Registro exitoso');
    } catch (error) {
      console.error('Error al registrar', error);
      alert('Error al registrar');
    }
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h2>Registrarse</h2>
        <form onSubmit={handleSubmit} className="form-signup">
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="tipoDocumento">Tipo de Documento:</label>
            <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange} required>
              <option value="">Seleccione...</option>
              <option value="Cedula de Ciudadania">Cédula de Ciudadanía</option>
              <option value="Cedula de Extranjeria">Cédula de Extranjería</option>
              <option value="NIT">NIT</option>
              <option value="Pasaporte">Pasaporte</option>
              <option value="RUT">RUT</option>
              <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="numeroDocumento">Número de Documento:</label>
            <input type="text" name="numeroDocumento" value={formData.numeroDocumento} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="departamento">Departamento:</label>
            <input type="text" name="departamento" value={formData.departamento} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="ciudad">Ciudad:</label>
            <input type="text" name="ciudad" value={formData.ciudad} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="direccion">Dirección:</label>
            <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="contraseña">Contraseña:</label>
            <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="repetirContraseña">Repetir Contraseña:</label>
            <input type="password" name="repetirContraseña" value={formData.repetirContraseña} onChange={handleChange} required />
          </div>
          <div className="form-group form-checkbox">
            <input
              type="checkbox"
              name="consentimiento"
              checked={formData.consentimiento}
              onChange={handleChange}
              required
            />
            <label htmlFor="consentimiento">
              Doy mi consentimiento libre, espontáneo e informado, y en consecuencia autorizo a Artesanías de Colombia S.A.-BIC...
            </label>
          </div>
          <button type="submit" className="button">Enviar Datos</button>
        </form>
      </div>
    </>
  );
};

export default SignUp;
