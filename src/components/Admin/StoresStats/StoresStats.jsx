import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "./StoresStats.css";
import axios from "axios";

const fakeData = [
  { store: "Tienda Norte", sales: 850 },
  { store: "Tienda Centro", sales: 1150 },
  { store: "Tienda Sur", sales: 780 },
  { store: "Tienda Occidente", sales: 1000 },
  { store: "Tienda Oriente", sales: 920 }
];

const StoresStats = () => {
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-12-31");
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //TODO: Cambiar fakeData por la llamada a la API
      const data = await axios.get('https://backend-vercel-lime.vercel.app/Angie/storesStats');

      setSalesData(data);
    };
    fetchData();
  }, [startDate, endDate]);

  return (
    <div className="stores-stats-container">
      <h2>Ventas por Punto de Venta</h2>

      {/* Selector de Rango de Fecha */}
      <div className="date-selector">
        <label>Desde: 
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <label>Hasta: 
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </label>
      </div>

      {/* Gráfica de Ventas por Punto de Venta */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="store" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#544544" barSize={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StoresStats;