import React from "react";
import "./StoreCard.css";

const StoreCard = ({ name, address, phone, image, onEdit, onDelete }) => {
  return (
    <div className="store-card">
      <img src={image || "src/rsc/store-placeholder.jpg"} alt="Tienda" className="store-image" />
      <h3 className="store-name">{name}</h3>
      <p className="store-address">{address}</p>
      <p className="store-phone">{phone}</p>
      <div className="store-actions">
        <button className="edit-btn" onClick={onEdit}>Editar</button>
        <button className="delete-btn" onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default StoreCard;