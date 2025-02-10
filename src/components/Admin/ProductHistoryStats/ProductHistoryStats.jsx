import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "./ProductHistoryStats.css";
import axios from "axios";


const fakeData = [
  { 
    name: "Producto A", 
    priceHistory: [
      { month: "Ene 2024", price: 55200 },
      { month: "Feb 2024", price: 53800 },
      { month: "Mar 2024", price: 57100 },
      { month: "Abr 2024", price: 58600 },
      { month: "May 2024", price: 60000 },
      { month: "Jun 2024", price: 59300 },
      { month: "Jul 2024", price: 61500 },
      { month: "Ago 2024", price: 63200 },
      { month: "Sep 2024", price: 64100 },
      { month: "Oct 2024", price: 62500 },
      { month: "Nov 2024", price: 60900 },
      { month: "Dic 2024", price: 59800 }
    ]
  },
  { 
    name: "Producto B", 
    priceHistory: [
      { month: "Ene 2024", price: 40200 },
      { month: "Feb 2024", price: 41200 },
      { month: "Mar 2024", price: 39900 },
      { month: "Abr 2024", price: 42000 },
      { month: "May 2024", price: 43500 },
      { month: "Jun 2024", price: 44000 },
      { month: "Jul 2024", price: 42800 },
      { month: "Ago 2024", price: 45000 },
      { month: "Sep 2024", price: 46200 },
      { month: "Oct 2024", price: 45800 },
      { month: "Nov 2024", price: 44500 },
      { month: "Dic 2024", price: 43900 }
    ]
  },
  { 
    name: "Producto C", 
    priceHistory: [
      { month: "Ene 2024", price: 70500 },
      { month: "Feb 2024", price: 72000 },
      { month: "Mar 2024", price: 73800 },
      { month: "Abr 2024", price: 71500 },
      { month: "May 2024", price: 74000 },
      { month: "Jun 2024", price: 75600 },
      { month: "Jul 2024", price: 77200 },
      { month: "Ago 2024", price: 76500 },
      { month: "Sep 2024", price: 78000 },
      { month: "Oct 2024", price: 79500 },
      { month: "Nov 2024", price: 80300 },
      { month: "Dic 2024", price: 81000 }
    ]
  }
];


const ProductsHistoryStats = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [priceData, setPriceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //TODO: Agregar servicio para obtener estadisticas de productos
      // const data = await axios.get("").then((res) => res.data)

      const data = fakeData;
      
      setProducts(data);
      if (data.length > 0) {
        setSelectedProduct(data[0].name);
        setPriceData(data[0].priceHistory);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      const product = products.find((p) => p.name === selectedProduct);
      setPriceData(product ? product.priceHistory : []);
    }
  }, [selectedProduct, products]);

  return (
    <div className="products-stats-container">
      <h2>Estadísticas Productos</h2>

      {/* Selector de Producto */}
      <select 
        className="product-selector" 
        value={selectedProduct || ""} 
        onChange={(e) => setSelectedProduct(e.target.value)}
      >
        {products.map((product) => (
          <option key={product.name} value={product.name}>{product.name}</option>
        ))}
      </select>

      {/* Gráfica de Precios */}
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={priceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#544544" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductsHistoryStats;