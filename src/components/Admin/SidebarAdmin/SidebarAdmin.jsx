import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaBoxOpen, FaUsers, FaUserTie, FaStore } from 'react-icons/fa';
import './SidebarAdmin.css';

const SidebarAdmin = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/admin/statistics">
              <FaChartBar className="icon" /> Estadísticas
            </Link>
          </li>
          <li>
            <Link to="/admin/products">
              <FaBoxOpen className="icon" /> Productos
            </Link>
          </li>
          <li>
            <Link to="/admin/clients">
              <FaUsers className="icon" /> Clientes
            </Link>
          </li>
          <li>
            <Link to="/admin/employees">
              <FaUserTie className="icon" /> Empleados
            </Link>
          </li>
          <li>
            <Link to="/admin/stores">
              <FaStore className="icon" /> Tiendas
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
