import React, { useState, useEffect } from "react";

const ProductFormModal = ({ product, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (product) setFormData(product);
  }, [product]);

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
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <h2>{product ? "Editar Producto" : "Agregar Producto"}</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre"
          style={styles.input}
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Precio"
          style={styles.input}
        />
        <div style={styles.imageUpload}>
          {formData.image && (
            <img src={formData.image} alt="Vista previa" style={styles.previewImage} />
          )}
          <label style={styles.uploadBtn}>
            Subir Imagen
            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
          </label>
        </div>
        <div style={styles.modalButtons}>
          <button style={styles.saveBtn} onClick={handleSubmit}>Guardar</button>
          <button style={styles.cancelBtn} onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "350px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
  },
  input: {
    width: "90%",
    padding: "8px",
    margin: "8px 0",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  imageUpload: {
    margin: "10px 0",
  },
  uploadBtn: {
    display: "inline-block",
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  previewImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "10px",
    marginTop: "10px",
  },
  modalButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  saveBtn: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  saveBtnHover: {
    backgroundColor: "#218838",
  },
  cancelBtn: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelBtnHover: {
    backgroundColor: "#c82333",
  },
};

export default ProductFormModal;
