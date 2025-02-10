import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SalesStats.css";

const fakeData = [
  { product: "Laptop HP", sales: 120 },
  { product: "Mouse Logitech", sales: 85 },
  { product: "Teclado Mecánico", sales: 60 },
  { product: "Monitor Samsung", sales: 45 },
  { product: "Auriculares Sony", sales: 30 },
];

const SalesStats = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        // const response = await axios.get("");
        // setSalesData(Array.isArray(response.data) ? response.data : []);

        const data = fakeData;
        setSalesData(data);
      } catch (error) {
        console.error("Error obteniendo top de ventas:", error);
        setSalesData([]);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <div className="sales-stats-container">
      <h2>Top de Ventas</h2>

      {/* Tabla de Ventas */}
      <table className="sales-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Ventas</th>
          </tr>
        </thead>
        <tbody>
          {salesData.length > 0 ? (
            salesData.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.sales}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No hay datos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SalesStats;