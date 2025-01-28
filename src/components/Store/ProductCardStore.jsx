import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

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

export default ProductCardStore;
