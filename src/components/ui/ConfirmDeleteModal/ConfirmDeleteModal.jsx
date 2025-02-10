import React from "react";
import "./ConfirmDeleteModal.css";

const ConfirmDeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¿Estás seguro?</h2>
        <p>Esta acción no se puede deshacer.</p>
        <div className="modal-buttons">
          <button className="delete-btn" onClick={onConfirm}>Eliminar</button>
          <button className="cancel-btn" onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;