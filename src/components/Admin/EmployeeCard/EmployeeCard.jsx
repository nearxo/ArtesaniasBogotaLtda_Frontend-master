import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = ({ 
  name = "Nombre por defecto", 
  position = "Puesto por defecto", 
  email = "email@dominio.com", 
  phone = "000-000-0000", 
  image = "https://static.thenounproject.com/png/5100711-200.png",
  onEdit,
  onDelete
}) => {
  return (
    <div className="employee-card">
      <img src={image} alt="Empleado" className="employee-image" />
      <h3 className="employee-name">{name}</h3>
      <p className="employee-position">{position}</p>
      <p className="employee-info">{email}</p>
      <p className="employee-info">{phone}</p>

      {/* Botones de acción */}
      <div className="employee-actions">
        <button className="edit-btn" onClick={onEdit}>Editar</button>
        <button className="delete-btn" onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default EmployeeCard;