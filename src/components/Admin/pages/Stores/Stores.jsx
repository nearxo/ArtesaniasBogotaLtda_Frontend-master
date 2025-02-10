import React, { useEffect, useState } from "react";
import StoreCard from "../../StoreCard/StoreCard";
import StoreFormModal from "../../StoreFormModal/StoreFormModal";
import ConfirmDeleteModal from "../../../ui/ConfirmDeleteModal/ConfirmDeleteModal";
import "./Stores.css";

const Stores = () => {
  const [stores, setStores] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentStore, setCurrentStore] = useState(null);
  const [storeToDelete, setStoreToDelete] = useState(null);

  useEffect(() => {
    const fetchStores = async () => {
      // const response = await axios.get('API_URL');
      // setStores(response.data);
      const fakeData = [
        { id: 1, name: "Tienda Centro", address: "Calle 123, Ciudad", phone: "300-456-7890", image: "" },
        { id: 2, name: "Sucursal Norte", address: "Avenida 456, Ciudad", phone: "320-654-0987" },
      ];
      setStores(fakeData);
    };
    fetchStores();
  }, []);

  const handleAddStore = () => {
    setCurrentStore(null);
    setModalOpen(true);
  };

  const handleEditStore = (store) => {
    setCurrentStore(store);
    setModalOpen(true);
  };

  const handleDeleteStore = (store) => {
    setStoreToDelete(store);
    setDeleteModalOpen(true);
  };

  const handleSaveStore = async (store) => {
    try {
      if (store.id) {
        // Actualizar tienda
        // const response = await axios.put(`API_URL/${store.id}`, store);
        // setStores(stores.map((s) => (s.id === store.id ? response.data : s)));
      } else {
        // Crear nueva tienda
        // const response = await axios.post('API_URL', store);
        // setStores([...stores, response.data]);
      }
      setModalOpen(false);
    } catch (error) {
      console.error("Error al guardar tienda:", error);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      // await axios.delete(`API_URL/${storeToDelete.id}`);
      // setStores(stores.filter((s) => s.id !== storeToDelete.id));
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Error al eliminar tienda:", error);
    }
  };

  return (
    <div className="stores-container">
      <h2 className="stores-title">Tiendas</h2>
      <button className="add-store-btn" onClick={handleAddStore}>Agregar Tienda</button>

      <div className="stores-grid">
        {stores.map((store) => (
          <StoreCard
            key={store.id}
            {...store}
            onEdit={() => handleEditStore(store)}
            onDelete={() => handleDeleteStore(store)}
          />
        ))}
      </div>

      {modalOpen && <StoreFormModal store={currentStore} onSave={handleSaveStore} onClose={() => setModalOpen(false)} />}
      {deleteModalOpen && <ConfirmDeleteModal onConfirm={handleConfirmDelete} onCancel={() => setDeleteModalOpen(false)} />}
    </div>
  );
};

export default Stores;