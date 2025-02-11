import axios from "axios";
import React, { useEffect, useState } from "react";
import ClientCard from "./ClientCard";
import { FaUsers } from "react-icons/fa"; // Ícono cuando no hay clientes

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("https://back-artesanias-vue.vercel.app/Usuarios/usuarios");
        const clientsData = response.data.usuarios.map((user) => ({
          id: user.idusuario,
          name: `${user.usuario}`, // No hay un campo de nombre, así que usamos un valor genérico
          email: user.correo || "Correo no disponible", // No hay teléfono en la API, puedes cambiarlo si se agrega
          address: user.nombrelugar ? `Lugar ID: ${user.nombrelugar}` : "Sin dirección",
          image: "/assets/user.jpg", // Imagen por defecto
        }));

        setClients(clientsData);
      } catch (error) {
        console.error("Error al obtener clientes:", error);
      }
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
              key={client.idusuario}
              name={client.name}
              email={client.email}
              address={client.nombrelugar}
              image={client.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Clients;
