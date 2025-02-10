import React, { useState, useEffect } from "react";
import "./EmployeeFormModal.css";

const EmployeeFormModal = ({ employee, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    email: "",
    phone: "",
    image: "",
  });

  useEffect(() => {
    if (employee) setFormData(employee);
  }, [employee]);

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
        <h2>{employee ? "Editar Empleado" : "Agregar Empleado"}</h2>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" />
        <input type="text" name="position" value={formData.position} onChange={handleChange} placeholder="Puesto" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo" />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Teléfono" />

        {/* Input para cargar imagen */}
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

export default EmployeeFormModal;