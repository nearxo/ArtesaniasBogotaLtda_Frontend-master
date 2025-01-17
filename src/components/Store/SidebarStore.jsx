import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css'; // Asegúrate de importar tus estilos globales

const SidebarStore = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/store/inventory">Inventario</Link>
          </li>
          <li>
            <Link to="/store/orders">Pedidos</Link>
          </li>
          <li>
            <Link to="/store/invoice">Facturar Pedido</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarStore;
