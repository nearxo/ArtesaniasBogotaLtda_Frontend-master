import React, { useState, useEffect } from "react";
import { FaUser, FaBoxOpen, FaPlus, FaMinus, FaFileInvoiceDollar } from "react-icons/fa";
import axios from "axios";
import ProductCardAdmin from "../Admin/ProductCardAdmin";
import BaseStore from "./BaseStore";

const API_URL = "https://backend-vercel-lime.vercel.app";

const Billing = () => {
  const [clientInfo, setClientInfo] = useState({ nombre: "", telefono: "" });
  const [clientAdded, setClientAdded] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productInput, setProductInput] = useState({ codigo: "", cantidad: 1 });

  useEffect(() => {
    const idPuntoFisico = sessionStorage.getItem("idlugar"); // Obtener ID del punto físico
    if (!idPuntoFisico) {
      console.error("IdPuntoFisico no encontrado en sessionStorage");
      return;
    }

    axios.get(`${API_URL}/Angie/productos/${idPuntoFisico}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error al cargar productos:", error));
  }, []);

  const handleClientChange = (e) => {
    setClientInfo({ ...clientInfo, [e.target.name]: e.target.value });
  };

  const handleProductChange = (e) => {
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };

  const handleAddClientInfo = () => {
    if (clientInfo.nombre && clientInfo.telefono) {
      setClientAdded(true);
    }
  };

  const handleAddProduct = () => {
    if (productInput.codigo && productInput.cantidad > 0) {
      const foundProduct = products.find(p => p.id.toString() === productInput.codigo);
      if (foundProduct) {
        const updatedProduct = {
          ...foundProduct,
          cantidad: parseInt(productInput.cantidad),
        };
        setSelectedProducts([...selectedProducts, updatedProduct]);
      } else {
        console.error("Producto no encontrado");
      }
      setProductInput({ codigo: "", cantidad: 1 });
    }
  };

  const handleInvoice = async () => {
    const usuario = sessionStorage.getItem("idusuario");
    const idPuntoFisico = sessionStorage.getItem("idlugar");
  
    if (!usuario || !idPuntoFisico) {
      alert("Falta información del usuario o punto físico.");
      return;
    }
  
    if (selectedProducts.length === 0) {
      alert("Debe agregar al menos un producto.");
      return;
    }
  
    const invoiceData = {
      usuario: parseInt(usuario), // ID del usuario
      idPuntoFisico: parseInt(idPuntoFisico), // ID del punto físico
      productos: selectedProducts.map((product) => product.id), // Solo IDs de productos
    };
  
    try {
      const response = await axios.post(`${API_URL}/factura/insertar-Factura`, invoiceData);
      console.log("Factura enviada:", response.data);
      alert("Factura generada con éxito");
  
      // Limpiar la factura después de generar
      setClientInfo({ nombre: "", telefono: "" });
      setSelectedProducts([]);
    } catch (error) {
      console.error("Error al enviar la factura:", error);
      alert("Error al generar la factura.");
    }
  };

  return (
    <BaseStore>
      <div style={styles.container}>
        <h2 style={styles.title}>Facturación</h2>

        {/* Datos del Cliente */}
        <div style={styles.section}>
          <h3 style={styles.title}><FaUser /> Información del Cliente</h3>
          <div style={styles.grid}>
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

        {/* Agregar Productos */}
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
              <button onClick={() => setProductInput(prev => ({ ...prev, cantidad: Math.max(1, prev.cantidad - 1) }))} style={styles.button}>
                <FaMinus />
              </button>
              <span>{productInput.cantidad}</span>
              <button onClick={() => setProductInput(prev => ({ ...prev, cantidad: prev.cantidad + 1 }))} style={styles.button}>
                <FaPlus />
              </button>
            </div>
            <button onClick={handleAddProduct} style={styles.button}>
              Agregar Producto
            </button>
          </div>
        </div>

        {/* Lista de Productos Seleccionados */}
        <div>
          <h3 style={styles.title}>Productos en la Factura</h3>
          {selectedProducts.length === 0 ? (
            <p>No hay productos en la factura.</p>
          ) : (
            <div style={styles.productGrid}>
              {selectedProducts.map((product, index) => (
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
    </BaseStore>
  );
};

// 🔹 Estilos en línea
const styles = {
  container: {
    padding: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "10px",
  },
};

export default Billing;
