import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/globals.css'; // Asegúrate de importar tus estilos globales

const SidebarAdmin = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/admin/statistics">Estadísticas de Productos</Link>
          </li>
          <li>
            <Link to="/admin/products">Productos</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
