import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import BaseStore from './BaseStore';

const ProductCardStore = ({ name, description, price, image, stock }) => {
  const [inventory, setInventory] = useState(stock);

  const increaseInventory = () => setInventory((prev) => prev + 1);
  const decreaseInventory = () => setInventory((prev) => (prev > 0 ? prev - 1 : 0));

  const styles = {
    card: {
      border: '1px solid var(--color-negro)',
      borderRadius: 'var(--radio-borde)',
      padding: 'var(--espaciado-grande)',
      boxShadow: 'var(--sombra-suave)',
      backgroundColor: 'var(--color-fondo)',
    },
    image: {
      width: '100%',
      height: '8rem',
      objectFit: 'cover',
      borderRadius: 'var(--radio-borde)',
    },
    title: {
      fontSize: 'var(--fuente-mediana)',
      fontWeight: 'bold',
      marginTop: 'var(--espaciado-pequeno)',
      color: 'var(--color-primario)',
    },
    description: {
      fontSize: 'var(--fuente-pequena)',
      color: 'var(--color-negro)',
    },
    price: {
      fontSize: 'var(--fuente-mediana)',
      fontWeight: 'bold',
      marginTop: 'var(--espaciado-pequeno)',
      color: 'var(--color-secundario)',
    },
    stock: {
      fontSize: 'var(--fuente-pequena)',
      color: 'var(--color-negro)',
    },
    buttonsContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 'var(--espaciado-grande)',
      gap: 'var(--espaciado-pequeno)',
    },
    button: {
      padding: 'var(--espaciado-pequeno)',
      backgroundColor: 'var(--color-primario)',
      borderRadius: 'var(--radio-borde)',
      cursor: 'pointer',
      transition: 'var(--transicion)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: 'var(--color-secundario)',
      },
    },
    inventoryCount: {
      fontSize: 'var(--fuente-mediana)',
      color: 'var(--color-negro)',
    },
  };

  return (
    <div style={styles.card}>
      <img src={image || 'src/rsc/product.png'} alt={name} style={styles.image} />
      <h3 style={styles.title}>{name}</h3>
      <p style={styles.description}>{description}</p>
      <p style={styles.price}>${price.toFixed(2)}</p>
      <p style={styles.stock}>Stock actual: {inventory}</p>
      <div style={styles.buttonsContainer}>
        <button onClick={decreaseInventory} style={styles.button}>
          <FaMinus />
        </button>
        <span style={styles.inventoryCount}>{inventory}</span>
        <button onClick={increaseInventory} style={styles.button}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

const Inventory = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 50.0,
      image: 'src/rsc/product.png',
      stock: 10,
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 75.0,
      image: 'src/rsc/product.png',
      stock: 5,
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 100.0,
      image: 'src/rsc/product.png',
      stock: 15,
    },
  ]);

  const inventoryStyles = {
    container: {
      padding: 'var(--espaciado-grande)',
    },
    header: {
      fontSize: 'var(--fuente-mediana-grande)',
      fontWeight: 'bold',
      marginBottom: 'var(--espaciado-pequeno)',
      color: 'var(--color-primario)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 'var(--espaciado-pequeno)',
      '@media(min-width: 640px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        '@media(min-width: 1024px)': {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
      },
    },
  };

  return (
      <div style={inventoryStyles.container}>
        <h2 style={inventoryStyles.header}>Inventario</h2>
        {products.length === 0 ? (
          <p style={inventoryStyles.loadingText}>Cargando productos...</p>
        ) : (
          <div style={inventoryStyles.grid}>
            {products.map((product) => (
              <ProductCardStore
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                stock={product.stock}
              />
            ))}
          </div>
        )}
      </div>
  );
};

export default Inventory;
