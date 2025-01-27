import React from 'react';

const ClientCard = ({ name = "Nombre por defecto", email = "email@dominio.com", phone = "000-000-0000", address = "Dirección por defecto", image = "src/rsc/user.jpg" }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-xs">
      <img src={image} alt="Usuario" className="w-32 h-32 object-cover rounded-full mx-auto" />
      <h3 className="text-xl font-semibold text-center mt-4">{name}</h3>
      <p className="text-center text-gray-500">{email}</p>
      <p className="text-center text-gray-500">{phone}</p>
      <p className="text-center text-gray-500">{address}</p>
    </div>
  );
};

export default ClientCard;
