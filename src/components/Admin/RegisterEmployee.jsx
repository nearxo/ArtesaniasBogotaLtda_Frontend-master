import React, { useState } from 'react';
import EmployeeCard from './EmployeeCard';

const RegisterEmployee = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    puesto: '',
    email: '',
    telefono: '',
    tipoDocumento: '',
    numeroDocumento: '',
    direccion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del empleado:', formData);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Registro de Empleado</h2>
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
            name="puesto"
            placeholder="Puesto"
            value={formData.puesto}
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
            name="direccion"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={handleChange}
            className="p-2 border rounded col-span-2"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Registrar Empleado
        </button>
      </form>

      {/* Vista previa de la EmployeeCard */}
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-2">Vista Previa:</h3>
        <EmployeeCard
          name={`${formData.nombre} ${formData.apellido}`}
          position={formData.puesto}
          email={formData.email}
          phone={formData.telefono}
        />
      </div>
    </div>
  );
};

export default RegisterEmployee;
