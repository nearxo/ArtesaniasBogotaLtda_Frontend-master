import React, { useState, useEffect } from 'react';
import ProductCardAdmin from './ProductCardAdmin';

const Stats = () => {
  // Datos por defecto mientras se carga la información desde el backend
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Producto A', ventas: 0 },
    { id: 2, nombre: 'Producto B', ventas: 0 },
    { id: 3, nombre: 'Producto C', ventas: 0 },
    { id: 4, nombre: 'Producto D', ventas: 0 },
  ]);
  
  const [loading, setLoading] = useState(true); // Estado para controlar el loading

  // Simulamos una llamada al backend
  useEffect(() => {
    // Simulamos un retraso de carga de 2 segundos
    setTimeout(() => {
      const datosDelBackend = [
        { id: 1, nombre: 'Producto A', ventas: 100 },
        { id: 2, nombre: 'Producto B', ventas: 50 },
        { id: 3, nombre: 'Producto C', ventas: 200 },
        { id: 4, nombre: 'Producto D', ventas: 75 },
      ];
      // Actualizamos los productos con los datos recibidos
      setProductos(datosDelBackend);
      setLoading(false); // Terminamos de cargar los datos
    }, 2000); // Simula un retraso de 2 segundos
  }, []);

  // Ordenamos los productos por ventas de mayor a menor
  const productosOrdenados = [...productos].sort((a, b) => b.ventas - a.ventas);

  return (
    <div>
      <h1>Estadísticas de Productos</h1>
      {loading ? (
        <p>Cargando estadísticas...</p> // Mensaje mientras se cargan los datos
      ) : (
        <div>
          {productosOrdenados.map((producto) => (
            <ProductCardAdmin key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Stats;
