import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaClipboardList, FaChartLine, FaFileInvoiceDollar } from 'react-icons/fa';

const SidebarStore = () => {
  const styles = {
    sidebarContainer: {
      width: '250px',
      backgroundColor: 'var(--color-fondo)',
      padding: 'var(--espaciado-pequeno)',
      boxShadow: 'var(--sombra-suave)',
      borderRadius: 'var(--radio-borde)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100vh',
    },
    sidebarHeader: {
      fontFamily: 'var(--fuente-principal)',
      fontSize: 'var(--fuente-mediana-grande)',
      color: 'var(--color-primario)',
      marginBottom: 'var(--espaciado-grande)',
      textAlign: 'center',
    },
    sidebarNav: {
      flexGrow: 1,
    },
    sidebarList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    sidebarItem: {
      marginBottom: 'var(--espaciado-pequeno)',
    },
    sidebarLink: {
      textDecoration: 'none',
      fontSize: 'var(--fuente-normal)',
      fontFamily: 'var(--fuente-principal)',
      color: 'var(--color-negro)',
      display: 'flex',
      alignItems: 'center',
      padding: 'var(--espaciado-pequeno)',
      borderRadius: 'var(--radio-borde)',
      transition: 'var(--transicion)',
    },
    sidebarIcon: {
      marginRight: 'var(--espaciado-pequeno)',
      fontSize: 'var(--fuente-mediana)',
      color: 'var(--color-primario)',
    },
    sidebarFooter: {
      textAlign: 'center',
      fontFamily: 'var(--fuente-principal)',
      fontSize: 'var(--fuente-pequena)',
      color: 'var(--color-negro)',
      padding: 'var(--espaciado-pequeno)',
      borderTop: `1px solid var(--color-hover)`,
    }
  };

  return (
    <aside style={styles.sidebarContainer}>
      <div style={styles.sidebarHeader}>
        
      </div>
      <nav style={styles.sidebarNav}>
        <ul style={styles.sidebarList}>
          <li style={styles.sidebarItem}>
            <Link to="/store/inventory" style={styles.sidebarLink}>
              <FaBox style={styles.sidebarIcon} />
              Inventario
            </Link>
          </li>
          <li style={styles.sidebarItem}>
            <Link to="/store/ordersstore" style={styles.sidebarLink}>
              <FaClipboardList style={styles.sidebarIcon} />
              Pedidos
            </Link>
          </li>
          <li style={styles.sidebarItem}>
            <Link to="/store/billing" style={styles.sidebarLink}>
              <FaFileInvoiceDollar style={styles.sidebarIcon} />
              Facturar Pedido
            </Link>
          </li>
          <li style={styles.sidebarItem}>
            <Link to="/store/storestats" style={styles.sidebarLink}>
              <FaChartLine style={styles.sidebarIcon} />
              Estadísticas de Tienda
            </Link>
          </li>
        </ul>
      </nav>
      <footer style={styles.sidebarFooter}>
        © 2025 Tienda Store
      </footer>
    </aside>
  );
};

export default SidebarStore;
