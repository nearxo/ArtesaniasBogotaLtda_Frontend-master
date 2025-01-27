import React, { useState } from 'react';
import ClientCard from "./Admin/ClientCard";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del cliente:', formData);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Registro de Cliente</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="tipoDocumento"
            placeholder="Tipo de Documento"
            value={formData.tipoDocumento}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="numeroDocumento"
            placeholder="Número de Documento"
            value={formData.numeroDocumento}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="departamento"
            placeholder="Departamento"
            value={formData.departamento}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded col-span-2"
            required
          />
          <input
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="password"
            name="repetirContraseña"
            placeholder="Repetir Contraseña"
            value={formData.repetirContraseña}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="consentimiento"
            checked={formData.consentimiento}
            onChange={handleChange}
          />
          <label>Acepto los términos y condiciones</label>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Registrarse
        </button>
      </form>

      {/* Previsualización de la ClientCard */}
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Vista Previa:</h3>
        <ClientCard
          name={`${formData.nombre} ${formData.apellido}`}
          email={formData.email}
          phone={formData.telefono}
          address={formData.direccion}
        />
      </div>
    </div>
  );
};

export default SignUp;
