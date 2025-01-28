import React, { useEffect, useState } from "react";
import ClientCard from "./ClientCard";

const Clients = () => {
  const [clients, setClients] = useState([]); // Estado para manejar los datos de los clientes

  // Simulación de datos del backend
  useEffect(() => {
    // Reemplaza esto con una llamada real al backend
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
      setClients(backendData);
    };

    fetchClients();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Clientes</h2>

      {/* Mostrar la ClientCard por defecto si no hay datos */}
      {clients.length === 0 && (
        <div className="flex justify-center">
          <ClientCard />
        </div>
      )}

      {/* Mostrar las tarjetas cargadas desde el backend */}
      {clients.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
