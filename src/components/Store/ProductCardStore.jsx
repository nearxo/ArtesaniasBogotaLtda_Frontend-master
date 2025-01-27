import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ProductCardStore = ({ name, description, price, image, stock }) => {
  const [inventory, setInventory] = useState(stock);

  const increaseInventory = () => setInventory((prev) => prev + 1);
  const decreaseInventory = () => setInventory((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src={image || 'src/rsc/product.png'} alt={name} className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <p className="text-lg font-bold mt-2">${price.toFixed(2)}</p>
      <p className="text-sm text-gray-500">Stock actual: {inventory}</p>
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
