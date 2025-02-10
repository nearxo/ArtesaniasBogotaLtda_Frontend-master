import React, { useState } from "react";

import ProductsHistoryStats from "../../ProductHistoryStats/ProductHistoryStats";
import StoresStats from "../../StoresStats/StoresStats";
import SalesStats from "../../SalesStats/SalesStats";

import "./Statistics.css";
import "../../../../styles/globals.css";

const Statistics = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="statistics-container">
      {/* Tabs */}
      <div className="tabs">
        <button 
          className={activeTab === "products" ? "active" : ""}
          onClick={() => setActiveTab("products")}
        >
          Estadísticas Productos
        </button>
        <button
          className={activeTab === "stores" ? "active" : ""}
          onClick={() => setActiveTab("stores")}
        >
          Estadísticas Puntos de Venta
        </button>
        <button 
          className={activeTab === "sales" ? "active" : ""}
          onClick={() => setActiveTab("sales")}
        >
          Top de Ventas
        </button>
      </div>

      {/* Contenido de las Tabs */}
      <div className="tab-content">
        {activeTab === "products" && <ProductsHistoryStats />}
        {activeTab === "stores" && <StoresStats />}
        {activeTab === "sales" && <SalesStats />}
      </div>
    </div>
  );
};

export default Statistics;