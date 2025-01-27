import React, { useState } from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Producto por defecto',
      description: 'Descripción por defecto',
      price: 100,
      image: 'src/rsc/product.png',
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Agregar un nuevo producto
  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.image) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const newId = products.length + 1;
    setProducts([
      ...products,
      {
        id: newId,
        ...newProduct,
        price: parseFloat(newProduct.price),
      },
    ]);
    setNewProduct({ name: '', description: '', price: '', image: '' });
    setShowForm(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Gestión de Productos</h2>

      {/* Botón para agregar productos */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="flex items-center justify-center p-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4"
      >
        <FaPlus className="mr-2" />
        {showForm ? 'Cerrar Formulario' : 'Agregar Producto'}
      </button>

      {/* Formulario para agregar producto */}
      {showForm && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
          <h3 className="text-lg font-semibold mb-4">Nuevo Producto</h3>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Nombre del Producto"
              value={newProduct.name}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="description"
              placeholder="Descripción"
              value={newProduct.description}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="price"
              placeholder="Precio"
              value={newProduct.price}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="image"
              placeholder="URL de la imagen"
              value={newProduct.image}
              onChange={handleInputChange}
              className="p-2 border rounded"
            />
            <button
              onClick={handleAddProduct}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Agregar Producto
            </button>
          </div>
        </div>
      )}

      {/* Lista de tarjetas de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <img
              src={product.image || 'src/rsc/product.png'}
              alt={product.name}
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
            <button className="w-full bg-yellow-500 text-white mt-4 py-2 rounded hover:bg-yellow-600 flex items-center justify-center space-x-2">
              <FaEdit />
              <span>Editar producto</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
