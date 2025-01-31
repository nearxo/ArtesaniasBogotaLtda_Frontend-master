import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2"; // Para gráficos
import { Tabs, Tab } from '../ui/tabs'; // Ruta correcta
import "chart.js/auto";

const StoreStats = () => {
  const [storeStats, setStoreStats] = useState([]);
  const [monthlyStoreStats, setMonthlyStoreStats] = useState([]);
  const [productStats, setProductStats] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - (11 - i)); // Retrocede 11 meses hacia atrás
    return date.toLocaleString('es-CO', { month: 'long', year: 'numeric' });
  });

  useEffect(() => {
    const fetchStoreStats = async () => {
      // Llamada real al backend
      const response = await fetch('/api/store-stats'); // Reemplaza esta URL por la tuya
      const data = await response.json();
      setStoreStats(data.sort((a, b) => b.sold - a.sold)); // Ordenar por vendidos
    };

    const fetchMonthlyStoreStats = async () => {
      // Llamada real al backend
      const response = await fetch('/api/monthly-store-stats'); // Reemplaza esta URL por la tuya
      const data = await response.json();
      setMonthlyStoreStats(data);
    };

    fetchStoreStats();
    fetchMonthlyStoreStats();
  }, []);

  useEffect(() => {
    const fetchProductStats = async () => {
      // Llamada real al backend
      const response = await fetch('/api/product-stats'); // Reemplaza esta URL por la tuya
      const data = await response.json();
      setProductStats(data);
    };
    fetchProductStats();
  }, [months]);

  const handleProductSelection = (e) => {
    const productName = e.target.value;
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
                <li key={index} style={styles.productItem}>
                  <span>{product.name}</span>
                  <span>Vendidos: {product.sold}</span>
                </li>
              ))}
            </ul>
            <div style={styles.chartContainer}>
              <h5 style={styles.chartTitle}>Ventas Mensuales</h5>
              <Bar
                data={{
                  labels: monthlyStoreStats.map((data) => data.month),
                  datasets: [
                    {
                      label: "Ventas Totales",
                      data: monthlyStoreStats.map((data) => data.totalSales),
                      backgroundColor: "rgba(75, 192, 192, 0.5)",
                      borderColor: "rgba(75, 192, 192, 1)",
                      borderWidth: 2,
                    },
                  ],
                }}
              />
            </div>
            <div style={styles.chartContainer}>
              <h5 style={styles.chartTitle}>Ingresos Mensuales</h5>
              <Line
                data={{
                  labels: monthlyStoreStats.map((data) => data.month),
                  datasets: [
                    {
                      label: "Ingresos Totales",
                      data: monthlyStoreStats.map((data) => data.totalRevenue),
                      backgroundColor: "rgba(54, 162, 235, 0.5)",
                      borderColor: "rgba(54, 162, 235, 1)",
                      borderWidth: 2,
                    },
                  ],
                }}
              />
            </div>
          </div>
        </Tab>
        <Tab value="product-stats" label="Estadísticas por Producto">
          <div style={styles.tabsContainer}>
            <h3 style={styles.chartTitle}>Selecciona un Producto</h3>
            <select onChange={handleProductSelection} defaultValue="">
              <option value="" disabled>Seleccione un producto</option>
              {productStats.map((product, index) => (
                <option key={index} value={product.product}>
                  {product.product}
                </option>
              ))}
            </select>
            {selectedProduct && (
              <div>
                <h4 className="text-lg font-bold mb-4">
                  Estadísticas para: {selectedProduct.product}
                </h4>
                <div style={styles.chartContainer}>
                  <h5 style={styles.chartTitle}>Precio Histórico</h5>
                  <Line
                    data={{
                      labels: selectedProduct.monthlyData.map(
                        (data) => data.month
                      ),
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
                  <h5 style={styles.chartTitle}>Ventas Mensuales</h5>
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
