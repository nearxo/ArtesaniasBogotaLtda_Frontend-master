import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaClipboardList, FaChartLine, FaFileInvoiceDollar } from 'react-icons/fa';

const SidebarStore = () => {
  const styles = {
    sidebar: {
      height: '100vh',
      width: '250px',
      backgroundColor: 'var(--color-fondo)',
      boxShadow: 'var(--sombra-suave)',
      borderRadius: 'var(--radio-borde)',
      padding: 'var(--espaciado-pequeno)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    nav: {
      flexGrow: 1,
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      padding: 'var(--espaciado-pequeno)',
      borderLeft: '4px solid var(--color-primario)',
      backgroundColor: 'var(--color-fondo)',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
      transition: 'var(--transicion)',
      marginBottom: 'var(--espaciado-pequeno)',
    },
    listItemHover: {
      backgroundColor: 'var(--color-hover)',
      borderLeft: '4px solid var(--color-destaque)',
      transform: 'scale(1.05)',
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      fontSize: 'var(--fuente-normal)',
      fontFamily: 'var(--fuente-principal)',
      padding: 'var(--espaciado-pequeno) 0',
    },
    icon: {
      fontSize: 'var(--fuente-mediana)',
      marginRight: 'var(--espaciado-pequeno)',
      color: 'var(--color-primario)',
    },
    footer: {
      textAlign: 'center',
      fontSize: 'var(--fuente-pequena)',
      fontFamily: 'var(--fuente-principal)',
      color: 'var(--color-negro)',
      padding: 'var(--espaciado-pequeno)',
      borderTop: '2px solid var(--color-hover)',
    },
  };

  return (
    <aside style={styles.sidebar}>
      <div style={styles.header}>Tienda</div>
      <nav style={styles.nav}>
        <ul style={styles.list}>
          <li
            style={styles.listItem}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.listItemHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.listItem)}
          >
            <Link to="/store/inventory" style={styles.link}>
              <FaBox style={styles.icon} />
              Inventario
            </Link>
          </li>
          <li
            style={styles.listItem}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.listItemHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.listItem)}
          >
            <Link to="/store/ordersstore" style={styles.link}>
              <FaClipboardList style={styles.icon} />
              Pedidos
            </Link>
          </li>
          <li
            style={styles.listItem}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.listItemHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.listItem)}
          >
            <Link to="/store/billing" style={styles.link}>
              <FaFileInvoiceDollar style={styles.icon} />
              Facturar Pedido
            </Link>
          </li>
          <li
            style={styles.listItem}
            onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.listItemHover)}
            onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.listItem)}
          >
            <Link to="/store/storestats" style={styles.link}>
              <FaChartLine style={styles.icon} />
              Estadísticas de Tienda
            </Link>
          </li>
        </ul>
      </nav>
      <footer style={styles.footer}>© 2025 Tienda Store</footer>
    </aside>
  );
};

export default SidebarStore;
