import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCardAdmin from "./ProductCardAdmin"; // Asegúrate de que el archivo esté en la ruta correcta
import ProductFormModal from "./ProductFormModal";
import ConfirmDeleteModal from "../ui/ConfirmDeleteModal/ConfirmDeleteModal"
const Products = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Puedes comentar la llamada a la API real 
         const response = await axios.get("https://backend-vercel-lime.vercel.app/Producto/consultar"); // Reemplaza con tu URL de la API
         setProducts(response.data);

      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = () => {
    setCurrentProduct(null);
    setModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setModalOpen(true);
  };

  const handleDeleteProduct = (product) => {
    setProductToDelete(product);
    setDeleteModalOpen(true);
  };

  const handleSaveProduct = async (product) => {
    try {
      if (product.id) {
        // Actualizar producto
         const response = await axios.put(`https://backend-vercel-lime.vercel.app/Angie/products/${product.id}`, product); // Reemplaza con tu URL de la API
         setProducts(products.map((p) => (p.id === product.id ? response.data : p)));
      } else {
        // Crear nuevo producto
        const response = await axios.post("https://backend-vercel-lime.vercel.app/Producto/insertar-producto", product); // Reemplaza con tu URL de la API
        setProducts([...products, response.data]);
      }
      setModalOpen(false);
    } catch (error) {
      console.error("Error al guardar producto:", error);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`https://backend-vercel-lime.vercel.app/products/${productToDelete.id}`); // Reemplaza con tu URL de la API
      setProducts(products.filter((p) => p.id !== productToDelete.id));
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Error al eliminar producto:", error);
    }
  };

  return (
    <div style={{ padding: '20px', margin: 'auto', maxWidth: '1120px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '10px', fontWeight: '600' }}>Gestión de Productos</h2>
      <button style={{ background: '#544544', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', display: 'block', marginBottom: '15px' }} onClick={handleAddProduct}>Agregar Producto</button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
        {products.map((product) => (
          <ProductCardAdmin
            key={product.id}
            {...product}
            onEdit={() => handleEditProduct(product)}
            onDelete={() => handleDeleteProduct(product)}
          />
        ))}
      </div>

      {modalOpen && <ProductFormModal product={currentProduct} onSave={handleSaveProduct} onClose={() => setModalOpen(false)} />}
      {deleteModalOpen && <ConfirmDeleteModal onConfirm={handleConfirmDelete} onCancel={() => setDeleteModalOpen(false)} />}
    </div>
  );
};

export default Products;
