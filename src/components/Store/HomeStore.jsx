import React from 'react';
import BaseStore from './BaseStore'; // Asegúrate de importar el contenedor base

const HomeStore = () => {
  const styles = {
    container: {
      padding: 'var(--espaciado-grande)',
    },
    header: {
      fontSize: 'var(--fuente-grande)',
      fontWeight: 'bold',
      marginBottom: 'var(--espaciado-pequeno)',
      color: 'var(--color-primario)',
    },
    paragraph: {
      fontSize: 'var(--fuente-normal)',
      color: 'var(--color-negro)',
    },
  };

  return (
    <BaseStore>
      <div style={styles.container}>
        <h1 style={styles.header}>
          Bienvenido a la Gestión de la Tienda
        </h1>
        <p style={styles.paragraph}>
          Aquí puedes gestionar el inventario, realizar ajustes y administrar tus productos de manera eficiente.
        </p>
      </div>
    </BaseStore>
  );
};

export default HomeStore;
