import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ProductCardStore = () => {
  const [inventory, setInventory] = useState(10);

  const increaseInventory = () => setInventory((prev) => prev + 1);
  const decreaseInventory = () => setInventory((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src="src/rsc/product.png" alt="Product" className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">Descripción del Producto</h3>
      <p className="text-sm text-gray-500">Unidades disponibles: {inventory}</p>
      <p className="text-lg font-bold mt-2">$0.00</p>
      <div className="flex items-center mt-4 space-x-4">
        <button onClick={decreaseInventory} className="p-2 bg-gray-200 rounded hover:bg-gray-300">
          <FaMinus />
        </button>
        <span className="text-lg">{inventory}</span>
        <button onClick={increaseInventory} className="p-2 bg-gray-200 rounded hover:bg-gray-300">
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCardStore;
