import React from 'react';

const EmployeeCard = ({ 
  name = "Nombre por defecto", 
  position = "Puesto por defecto", 
  email = "email@dominio.com", 
  phone = "000-000-0000", 
  image = "src/rsc/user.jpg" 
}) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-xs">
      <img src={image} alt="Empleado" className="w-32 h-32 object-cover rounded-full mx-auto" />
      <h3 className="text-xl font-semibold text-center mt-4">{name}</h3>
      <p className="text-center text-gray-500">{position}</p>
      <p className="text-center text-gray-500">{email}</p>
      <p className="text-center text-gray-500">{phone}</p>
    </div>
  );
};

export default EmployeeCard;
