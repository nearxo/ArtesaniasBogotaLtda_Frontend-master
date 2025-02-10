import React, { useState } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import BaseAdmin from '../BaseAdmin';

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Producto de prueba',
      description: 'Descripción de prueba',
      price: 100,
      image: 'src/rsc/product.png',
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  // Agregar o actualizar producto
  const handleSaveProduct = () => {
    if (!productData.name || !productData.description || !productData.price || !productData.image) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (editingProduct) {
      // Actualizar producto existente
      setProducts(
        products.map((product) =>
          product.id === editingProduct.id ? { ...editingProduct, ...productData, price: parseFloat(productData.price) } : product
        )
      );
      setEditingProduct(null);
    } else {
      // Crear nuevo producto
      const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
      setProducts([...products, { id: newId, ...productData, price: parseFloat(productData.price) }]);
    }

    setProductData({ name: '', description: '', price: '', image: '' });
    setShowForm(false);
  };

  // Cargar datos del producto en el formulario para edición
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductData(product);
    setShowForm(true);
  };

  // Eliminar producto
  const handleDeleteProduct = (id) => {
    if (window.confirm('¿Seguro que deseas eliminar este producto?')) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    <BaseAdmin>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Gestión de Productos</h2>

        {/* Botón para agregar productos */}
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingProduct(null);
            setProductData({ name: '', description: '', price: '', image: '' });
          }}
          className="flex items-center justify-center p-2 bg-green-500 text-white rounded hover:bg-green-600 mb-4"
        >
          <FaPlus className="mr-2" />
          {showForm ? 'Cerrar Formulario' : 'Agregar Producto'}
        </button>

        {/* Formulario para agregar/editar producto */}
        {showForm && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
            <h3 className="text-lg font-semibold mb-4">{editingProduct ? 'Editar Producto' : 'Nuevo Producto'}</h3>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                name="name"
                placeholder="Nombre del Producto"
                value={productData.name}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="description"
                placeholder="Descripción"
                value={productData.description}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
              <input
                type="number"
                name="price"
                placeholder="Precio"
                value={productData.price}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="image"
                placeholder="URL de la imagen"
                value={productData.image}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
              <button
                onClick={handleSaveProduct}
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {editingProduct ? 'Actualizar Producto' : 'Agregar Producto'}
              </button>
            </div>
          </div>
        )}

        {/* Lista de productos */}
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
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => handleEditProduct(product)}
                  className="flex-1 bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 flex items-center justify-center space-x-2"
                >
                  <FaEdit />
                  <span>Editar</span>
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 flex items-center justify-center space-x-2"
                >
                  <FaTrash />
                  <span>Eliminar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BaseAdmin>
  );
};

export default Products;
