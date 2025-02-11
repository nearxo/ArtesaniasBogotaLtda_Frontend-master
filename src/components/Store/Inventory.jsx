import React, { useState, useEffect } from 'react';
import { FaPlus, FaMinus, FaSave } from 'react-icons/fa';
import BaseStore from './BaseStore';

const API_BASE_URL = "https://backend-vercel-lime.vercel.app";

const ProductCardStore = ({ product, onSave }) => {
  const { idproducto, nombreproducto, cantidad } = product;
  const [inventory, setInventory] = useState(cantidad);

  const increaseInventory = () => setInventory((prev) => prev + 1);
  const decreaseInventory = () => setInventory((prev) => (prev > 0 ? prev - 1 : 0));
  const handleSave = () => onSave(idproducto, inventory);

  return (
    <div style={{ border: '1px solid var(--color-negro)', padding: '20px', borderRadius: '8px', boxShadow: 'var(--sombra-suave)' }}>
      <h3>{nombreproducto}</h3>
      <p>Stock actual: {inventory}</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={decreaseInventory}><FaMinus /></button>
        <span>{inventory}</span>
        <button onClick={increaseInventory}><FaPlus /></button>
        <button onClick={handleSave}><FaSave /> Guardar</button>
      </div>
    </div>
  );
};

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const IdPuntoFisico = sessionStorage.getItem("IdPuntoFisico"); // Obtener ID del punto físico
    if (!IdPuntoFisico) {
      console.error("IdPuntoFisico no encontrado en sessionStorage");
      return;
    }

    fetch(`${API_BASE_URL}/inventario/punto-fisico/${IdPuntoFisico}`)
      .then((response) => response.json())
      .then((data) => setProducts(data.productos)) // Ajustar al formato correcto
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  const handleSave = (productId, newInventory) => {
    const IdPuntoFisico = sessionStorage.getItem("IdPuntoFisico");
    if (!IdPuntoFisico) {
      console.error("IdPuntoFisico no encontrado en sessionStorage");
      return;
    }

    // Actualizar localmente el estado
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.idproducto === productId ? { ...product, cantidad: newInventory } : product
      )
    );

    // Enviar cambios al backend
    fetch(`${API_BASE_URL}/inventario/actualizar/${IdPuntoFisico}/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cantidad: newInventory }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Producto actualizado:", data))
      .catch((error) => console.error("Error al actualizar producto:", error));
  };

  return (
    <BaseStore>
      <div>
        <h2>Inventario</h2>
        {products.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
            {products.map((product) => (
              <ProductCardStore key={product.idproducto} product={product} onSave={handleSave} />
            ))}
          </div>
        )}
      </div>
    </BaseStore>
  );
};

export default Inventory;
