import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2"; // Para gráficos
import { Tabs, Tab } from '../ui/tabs'; // Ruta correcta
import "chart.js/auto";
import BaseStore from './BaseStore'; // Importar BaseStore

const StoreStats = () => {
  const [storeStats, setStoreStats] = useState([]);
  const [productStats, setProductStats] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Simular datos del backend para estadísticas de tienda
  useEffect(() => {
    const fetchStoreStats = async () => {
      const data = [
        { name: "Producto A", sold: 120, price: 5000 },
        { name: "Producto B", sold: 90, price: 2000 },
        { name: "Producto C", sold: 70, price: 15000 },
        { name: "Producto D", sold: 50, price: 10000 },
        { name: "Producto E", sold: 20, price: 8000 },
      ];
      setStoreStats(data.sort((a, b) => b.sold - a.sold)); // Ordenar por vendidos
    };
    fetchStoreStats();
  }, []);

  // Simular datos del backend para estadísticas por producto
  useEffect(() => {
    const fetchProductStats = async () => {
      const data = [
        {
          product: "Producto A",
          monthlyData: Array.from({ length: 12 }, (_, i) => ({
            month: `Mes ${i + 1}`,
            price: Math.random() * 10000 + 5000, // Simular precio
            sold: Math.floor(Math.random() * 100), // Simular ventas
          })),
        },
        {
          product: "Producto B",
          monthlyData: Array.from({ length: 12 }, (_, i) => ({
            month: `Mes ${i + 1}`,
            price: Math.random() * 5000 + 2000,
            sold: Math.floor(Math.random() * 50),
          })),
        },
      ];
      setProductStats(data);
    };
    fetchProductStats();
  }, []);

  // Manejar selección de producto para estadísticas
  const handleProductSelection = (productName) => {
    setSelectedProduct(
      productStats.find((product) => product.product === productName)
    );
  };

  const styles = {
    container: {
      padding: 'var(--espaciado-grande)',
    },
    header: {
      fontSize: 'var(--fuente-mediana-grande)',
      fontWeight: 'bold',
      marginBottom: 'var(--espaciado-pequeno)',
      color: 'var(--color-primario)',
    },
    productList: {
      listStyle: 'none',
      padding: 0,
      marginBottom: 'var(--espaciado-grande)',
    },
    productItem: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: 'var(--espaciado-pequeno) 0',
      borderBottom: '1px solid var(--color-hover)',
    },
    tabsContainer: {
      marginBottom: 'var(--espaciado-grande)',
    },
    tabButton: {
      padding: 'var(--espaciado-grande)',
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
    chartContainer: {
      marginBottom: 'var(--espaciado-grande)',
    },
    chartTitle: {
      fontSize: 'var(--fuente-mediana)',
      fontWeight: 'bold',
      marginBottom: 'var(--espaciado-pequeno)',
      color: 'var(--color-primario)',
    },
  };

  return (
      <div style={styles.container}>
        <h2 style={styles.header}>Estadísticas de la Tienda</h2>
        <Tabs defaultValue="store-stats">
          <Tab value="store-stats" label="Estadísticas de Tienda">
            <div style={styles.tabsContainer}>
              <h3 style={styles.chartTitle}>Productos Ordenados</h3>
              <ul style={styles.productList}>
                {storeStats.map((product, index) => (
                  <li
                    key={index}
                    style={styles.productItem}
                  >
                    <span>{product.name}</span>
                    <span>Vendidos: {product.sold}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Tab>
          <Tab value="product-stats" label="Estadísticas por Producto">
            <div style={styles.tabsContainer}>
              <h3 style={styles.chartTitle}>Selecciona un Producto</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {productStats.map((product, index) => (
                  <button
                    key={index}
                    onClick={() => handleProductSelection(product.product)}
                    style={styles.tabButton}
                  >
                    {product.product}
                  </button>
                ))}
              </div>
              {selectedProduct && (
                <div>
                  <h4 className="text-lg font-bold mb-4">
                    Estadísticas para: {selectedProduct.product}
                  </h4>
                  <div style={styles.chartContainer}>
                    <h5 style={styles.chartTitle}>
                      Precio Histórico
                    </h5>
                    <Line
                      data={{
                        labels: selectedProduct.monthlyData.map(
                          (data) => data.month
                        ),
                        datasets: [
                          {
                            label: "Precio",
                            data: selectedProduct.monthlyData.map(
                              (data) => data.price
                            ),
                            backgroundColor: "rgba(54, 162, 235, 0.5)",
                            borderColor: "rgba(54, 162, 235, 1)",
                            borderWidth: 2,
                          },
                        ],
                      }}
                    />
                  </div>
                  <div style={styles.chartContainer}>
                    <h5 style={styles.chartTitle}>
                      Ventas Mensuales
                    </h5>
                    <Bar
                      data={{
                        labels: selectedProduct.monthlyData.map(
                          (data) => data.month
                        ),
                        datasets: [
                          {
                            label: "Cantidad Vendida",
                            data: selectedProduct.monthlyData.map(
                              (data) => data.sold
                            ),
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
            </div>
          </Tab>
        </Tabs>
      </div>
  );
};

export default StoreStats;
