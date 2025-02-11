import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "./ProductHistoryStats.css";
import axios from "axios";

const ProductsHistoryStats = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [priceData, setPriceData] = useState([]);
  const [price, setprice] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //TODO: Agregar servicio para obtener estadisticas de productos
      const data = await axios.get("https://backend-vercel-lime.vercel.app/Angie/ProductHistoryStats").then((res) => res.data)
      
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
  useEffect(() => {
    if (selectedProduct) {
      const product = products.find((p) => p.name === selectedProduct);
      const updatedPriceData = product ? product.priceHistory.map(item => ({
        ...item,
        price: Number(item.price.replace('$', ''))
      })) : [];
      setPriceData(updatedPriceData);
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