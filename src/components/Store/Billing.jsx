import React, { useState, useEffect } from "react";
import { FaUser, FaBoxOpen, FaPlus, FaMinus, FaFileInvoiceDollar } from 'react-icons/fa';
import ProductCardAdmin from "../Admin/ProductCardAdmin";
import BaseStore from "./BaseStore";

const Billing = () => {
  const [clientInfo, setClientInfo] = useState({
    cedula: "",
    nombre: "",
    telefono: "",
  });

  const [clientAdded, setClientAdded] = useState(false);
  const [products, setProducts] = useState([]);
  const [productInput, setProductInput] = useState({
    codigo: "",
    cantidad: 1,
  });

  useEffect(() => {
    // Llamada al backend para obtener los productos
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al cargar productos:', error));
  }, []);

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClientInfo({
      ...clientInfo,
      [name]: value,
    });
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductInput({
      ...productInput,
      [name]: value,
    });
  };

  const handleAddClientInfo = () => {
    if (clientInfo.cedula && clientInfo.nombre && clientInfo.telefono) {
      setClientAdded(true);
    }
  };

  const handleAddProduct = () => {
    if (productInput.codigo && productInput.cantidad > 0) {
      const newProduct = products.find(product => product.codigo === productInput.codigo);
      if (newProduct) {
        const updatedProduct = {
          ...newProduct,
          cantidad: productInput.cantidad,
        };
        setProducts([...products, updatedProduct]);
      } else {
        console.error('Producto no encontrado');
      }
      setProductInput({ codigo: "", cantidad: 1 });
    }
  };

  const handleInvoice = () => {
    const invoiceData = {
      clientInfo,
      products,
    };

    // Envío de los datos de la factura al backend
    fetch('/api/invoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(invoiceData),
    })
      .then((response) => response.json())
      .then((data) => console.log('Factura enviada:', data))
      .catch((error) => console.error('Error al enviar la factura:', error));
  };

  const increaseQuantity = () => {
    setProductInput((prev) => ({
      ...prev,
      cantidad: prev.cantidad + 1,
    }));
  };

  const decreaseQuantity = () => {
    setProductInput((prev) => ({
      ...prev,
      cantidad: prev.cantidad > 1 ? prev.cantidad - 1 : 1,
    }));
  };

  const styles = {
    container: {
      padding: 'var(--espaciado-grande)',
    },
    section: {
      marginBottom: 'var(--espaciado-grande)',
    },
    title: {
      fontSize: 'var(--fuente-mediana)',
      fontWeight: 'bold',
      marginBottom: 'var(--espaciado-pequeno)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 'var(--espaciado-pequeno)',
      '@media(min-width: 640px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
    input: {
      padding: 'var(--espaciado-pequeno)',
      border: '1px solid var(--color-negro)',
      borderRadius: 'var(--radio-borde)',
    },
    button: {
      backgroundColor: 'var(--color-primario)',
      color: 'white',
      padding: 'var(--espaciado-pequeno) var(--espaciado-grande)',
      borderRadius: 'var(--radio-borde)',
      cursor: 'pointer',
      transition: 'var(--transicion)',
      '&:hover': {
        backgroundColor: 'var(--color-secundario)',
      },
    },
    productGrid: {
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
    quantityContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--espaciado-pequeno)',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Facturación</h2>

      <div style={styles.section}>
        <h3 style={styles.title}><FaUser /> Información del Cliente</h3>
        <div style={styles.grid}>
          <input
            type="text"
            name="cedula"
            placeholder="Cédula"
            value={clientInfo.cedula}
            onChange={handleClientChange}
            style={styles.input}
          />
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={clientInfo.nombre}
            onChange={handleClientChange}
            style={styles.input}
          />
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={clientInfo.telefono}
            onChange={handleClientChange}
            style={styles.input}
          />
          <button onClick={handleAddClientInfo} style={styles.button}>
            Agregar Datos del Cliente
          </button>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.title}><FaBoxOpen /> Agregar Productos</h3>
        <div style={styles.grid}>
          <input
            type="text"
            name="codigo"
            placeholder="Código del Producto"
            value={productInput.codigo}
            onChange={handleProductChange}
            style={styles.input}
          />
          <div style={styles.quantityContainer}>
            <button onClick={decreaseQuantity} style={styles.button}>
              <FaMinus />
            </button>
            <span>{productInput.cantidad}</span>
            <button onClick={increaseQuantity} style={styles.button}>
              <FaPlus />
            </button>
          </div>
          <button onClick={handleAddProduct} style={styles.button}>
            Agregar Producto
          </button>
        </div>
      </div>

      <div>
        <h3 style={styles.title}>Productos en la Factura</h3>
        {products.length === 0 ? (
          <p>No hay productos en la factura.</p>
        ) : (
          <div style={styles.productGrid}>
            {products.map((product, index) => (
              <ProductCardAdmin
                key={index}
                name={product.name}
                price={product.price}
                description={`Cantidad: ${product.cantidad}`}
                image={product.image}
              />
            ))}
          </div>
        )}
      </div>
      
      <button onClick={handleInvoice} style={styles.button}>
        <FaFileInvoiceDollar /> Facturar
      </button>
    </div>
  );
};

export default Billing;
