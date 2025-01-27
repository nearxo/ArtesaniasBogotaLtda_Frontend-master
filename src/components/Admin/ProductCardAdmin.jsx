import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const ProductCardAdmin = () => {
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('Descripción del Producto');
  const [image, setImage] = useState('src/rsc/product.png');

  const handleEdit = () => {
    const newPrice = prompt('Nuevo precio:', price);
    const newDescription = prompt('Nueva descripción:', description);
    const newImage = prompt('Nueva URL de imagen:', image);

    if (newPrice) setPrice(newPrice);
    if (newDescription) setDescription(newDescription);
    if (newImage) setImage(newImage);
  };

  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src={image} alt="Product" className="w-full h-32 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{description}</h3>
      <p className="text-lg font-bold mt-2">${price}</p>
      <button onClick={handleEdit} className="w-full bg-yellow-500 text-white mt-4 py-2 rounded hover:bg-yellow-600 flex items-center justify-center space-x-2">
        <FaEdit />
        <span>Editar producto</span>
      </button>
    </div>
  );
};

export default ProductCardAdmin;
