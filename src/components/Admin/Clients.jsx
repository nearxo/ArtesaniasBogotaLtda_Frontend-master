import React, { useEffect, useState } from "react";
import ClientCard from "./ClientCard";
import { FaUsers } from "react-icons/fa"; // Ícono cuando no hay clientes

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const backendData = [
        {
          id: 1,
          name: "Juan Pérez",
          email: "juan.perez@example.com",
          phone: "300-123-4567",
          address: "Calle 123, Bogotá",
          image: "src/rsc/user.jpg",
        },
        {
          id: 2,
          name: "María López",
          email: "maria.lopez@example.com",
          phone: "300-765-4321",
          address: "Carrera 45, Medellín",
          image: "src/rsc/user.jpg",
        },
      ];
      setTimeout(() => setClients(backendData), 500);
    };

    fetchClients();
  }, []);

  return (
    <div className="p-8 bg-gray-100 rounded-xl shadow-md max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Lista de Clientes
      </h2>

      {clients.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-60 text-gray-500">
          <FaUsers className="text-6xl mb-2" />
          <p>No hay clientes registrados.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {clients.map((client) => (
            <ClientCard
              key={client.id}
              name={client.name}
              email={client.email}
              phone={client.phone}
              address={client.address}
              image={client.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Clients;
