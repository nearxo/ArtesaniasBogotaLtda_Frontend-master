import React from "react";
import InNavbar from "../InNavbar"; // Ruta ajustada
import SidebarStore from "./SidebarStore";
import { FaRegUserCircle } from "react-icons/fa";

const BaseStore = ({ userName = "Usuario", userRole = "Cliente" }) => {
  const styles = {
    baseContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'var(--color-fondo)',
    },
    header: {
      marginBottom: 'var(--espaciado-grande)',
    },
    content: {
      display: 'flex',
      flex: 1,
    },
    sidebar: {
      flex: '0 0 250px', // Asegura que la barra lateral tenga un ancho fijo
    },
    main: {
      flex: 1,
      padding: 'var(--espaciado-grande)',
      backgroundColor: 'var(--color-fondo)',
      boxShadow: 'var(--sombra-suave)',
      borderRadius: 'var(--radio-borde)',
      marginLeft: 'var(--espaciado-grande)',
    },
    footer: {
      textAlign: 'center',
      padding: 'var(--espaciado-pequeno)',
      borderTop: `1px solid var(--color-hover)`,
      fontFamily: 'var(--fuente-principal)',
      fontSize: 'var(--fuente-pequena)',
      color: 'var(--color-negro)',
      marginTop: 'var(--espaciado-grande)',
    }
  };

  return (
    <div style={styles.baseContainer}>
      <header style={styles.header}>
        <InNavbar userName={userName} userRole={userRole} />
      </header>
      <div style={styles.content}>
        <aside style={styles.sidebar}>
          <SidebarStore />
        </aside>
        <main style={styles.main}>
          {/* Aquí puedes colocar el contenido principal de la tienda */}
          <h2>Bienvenido a la Tienda</h2>
          <p>Aquí puedes gestionar tu inventario, pedidos, facturación y estadísticas.</p>
        </main>
      </div>
      <footer style={styles.footer}>
        © 2025 Tienda Store
      </footer>
    </div>
  );
};

export default BaseStore;
