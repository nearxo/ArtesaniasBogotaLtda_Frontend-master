import React, { useEffect, useState } from 'react';
import ProductCardClient from './ProductCardClient';

const Shopping = () => {
  const [products, setProducts] = useState([]);

  // Simula una llamada al backend
  useEffect(() => {
    const fetchProducts = async () => {
      // Simulación de datos del backend
      const mockData = [
        {
          id: 1,
          name: 'Producto 1',
          description: 'Descripción del producto 1',
          price: 50.0,
          image: 'src/rsc/product.png',
          stock: 10,
        },
        {
          id: 2,
          name: 'Producto 2',
          description: 'Descripción del producto 2',
          price: 75.0,
          image: 'src/rsc/product.png',
          stock: 5,
        },
        {
          id: 3,
          name: 'Producto 3',
          description: 'Descripción del producto 3',
          price: 100.0,
          image: 'src/rsc/product.png',
          stock: 15,
        },
      ];

      // Simula un retardo del backend
      setTimeout(() => setProducts(mockData), 1000);
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Tienda</h2>

      {/* Cargando productos */}
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCardClient
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              stock={product.stock}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shopping;
