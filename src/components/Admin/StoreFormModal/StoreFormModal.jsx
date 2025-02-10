import React, { useState, useEffect } from "react";
import "./StoreFormModal.css";

const StoreFormModal = ({ store, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    image: "",
  });

  useEffect(() => {
    if (store) setFormData(store);
  }, [store]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{store ? "Editar Tienda" : "Agregar Tienda"}</h2>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Dirección" />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" />

        <div className="image-upload">
          {formData.image && <img src={formData.image} alt="Vista previa" className="preview-image" />}
          <label className="upload-btn">
            Subir Imagen
            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
          </label>
        </div>

        <div className="modal-buttons">
          <button className="save-btn" onClick={handleSubmit}>Guardar</button>
          <button className="cancel-btn" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default StoreFormModal;