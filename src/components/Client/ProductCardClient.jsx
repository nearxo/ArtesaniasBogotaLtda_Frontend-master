import React, { useState } from 'react';
import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa';

const ProductCardClient = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src="src/rsc/product.png" alt="Product" className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">Descripción del Producto</h3>
      <p className="text-sm text-gray-500">Unidades disponibles: 10</p>
      <p className="text-lg font-bold mt-2">$0.00</p>
      <div className="flex items-center mt-4 space-x-4">
        <button onClick={decreaseCount} className="p-2 bg-gray-200 rounded hover:bg-gray-300">
          <FaMinus />
        </button>
        <span className="text-lg">{count}</span>
        <button onClick={increaseCount} className="p-2 bg-gray-200 rounded hover:bg-gray-300">
          <FaPlus />
        </button>
      </div>
      <button className="w-full bg-blue-500 text-white mt-4 py-2 rounded hover:bg-blue-600 flex items-center justify-center space-x-2">
        <FaShoppingCart />
        <span>Agregar al carrito</span>
      </button>
    </div>
  );
};

export default ProductCardClient;
