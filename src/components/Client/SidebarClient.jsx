import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css'; // Asegúrate de importar tus estilos globales

const SidebarClient = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/client/products">Productos</Link>
          </li>
          <li>
            <Link to="/client/orders">Mis Pedidos</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarClient;
