import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
import { Tabs, Tab } from "../ui/tabs"
import BaseStore from "./BaseStore";
import "chart.js/auto";

const StoreStats = () => {
  const [storeStats, setStoreStats] = useState([]); // Ahora se obtiene de la API
  const [productStats, setProductStats] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Obtener estadísticas de ventas mensuales
  useEffect(() => {
    const fetchStoreStats = async () => {
      try {
        const response = await axios.get("https://backend-vercel-lime.vercel.app/Angie/ventas-mensuales");
        setStoreStats(response.data); // Guardar la respuesta en el estado
      } catch (error) {
        console.error("Error al obtener estadísticas de ventas:", error);
      }
    };
    fetchStoreStats();
  }, []);

  // Obtener historial de productos vendidos
  useEffect(() => {
    const fetchProductStats = async () => {
      try {
        const response = await axios.get("https://backend-vercel-lime.vercel.app/Angie/historialProductos/historial");
        setProductStats(response.data);
      } catch (error) {
        console.error("Error al obtener estadísticas de productos:", error);
      }
    };
    fetchProductStats();
  }, []);

  // Manejar selección de producto
  const handleProductSelection = (productName) => {
    const foundProduct = productStats.find((product) => product.product === productName);
    setSelectedProduct(foundProduct || null);
  };

  return (
    <BaseStore>
      <h2>Estadísticas de la Tienda</h2>
      <Tabs defaultValue="store-stats">
        <Tab value="store-stats" label="Estadísticas de Tienda">
          <h3>Productos Vendidos Mensualmente</h3>
          <div style={styles.chartContainer}>
            {storeStats.length > 0 ? (
              <Bar
                data={{
                  labels: storeStats.map((data) => data.month),
                  datasets: [
                    {
                      label: "Ventas Mensuales",
                      data: storeStats.map((data) => data.sales),
                      backgroundColor: "rgba(75, 192, 192, 0.5)",
                      borderColor: "rgba(75, 192, 192, 1)",
                      borderWidth: 2,
                    },
                  ],
                }}
              />
            ) : (
              <p>Cargando datos...</p>
            )}
          </div>
        </Tab>

        <Tab value="product-stats" label="Estadísticas por Producto">
          <h3>Selecciona un Producto</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {productStats.map((product, index) => (
              <button key={index} onClick={() => handleProductSelection(product.product)} style={styles.tabButton}>
                {product.product}
              </button>
            ))}
          </div>

          {selectedProduct && selectedProduct.monthlyData && (
            <div>
              <h4>Estadísticas para: {selectedProduct.product}</h4>
              <div style={styles.chartContainer}>
                <h5>Precio Histórico</h5>
                <Line
                  data={{
                    labels: selectedProduct.monthlyData.map((data) => data.month),
                    datasets: [
                      {
                        label: "Precio",
                        data: selectedProduct.monthlyData.map((data) => data.price),
                        backgroundColor: "rgba(54, 162, 235, 0.5)",
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 2,
                      },
                    ],
                  }}
                />
              </div>
              <div style={styles.chartContainer}>
                <h5>Ventas Mensuales</h5>
                <Bar
                  data={{
                    labels: selectedProduct.monthlyData.map((data) => data.month),
                    datasets: [
                      {
                        label: "Cantidad Vendida",
                        data: selectedProduct.monthlyData.map((data) => data.sold),
                        backgroundColor: "rgba(75, 192, 192, 0.5)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 2,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          )}
        </Tab>
      </Tabs>
    </BaseStore>
  );
};

// 🔹 Estilos en línea
const styles = {
  tabButton: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  chartContainer: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

export default StoreStats;
