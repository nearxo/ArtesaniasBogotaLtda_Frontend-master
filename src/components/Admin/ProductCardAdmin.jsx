import React from "react";

const ProductCardAdmin = ({ 
  name = "Nombre por defecto", 
  price = "0.00", 
  image = "https://via.placeholder.com/150",
  onEdit,
  onDelete
}) => {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      textAlign: 'center',
      width: '250px',
      transition: 'transform 0.2s ease-in-out',
      margin: '0 auto',
      cursor: 'pointer'
    }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.00)'}>
      <img src={image} alt={name} style={{
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '10px',
      }} />
      <h3 style={{
        fontSize: '18px',
        fontWeight: 'bold',
        margin: '5px 0',
        color: '#2d3748'
      }}>{name}</h3>
      <p style={{
        fontSize: '14px',
        color: '#718096',
        marginBottom: '10px'
      }}>{`Precio: $${price}`}</p>
      <div style={{
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <button style={{
          border: 'none',
          padding: '8px 12px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px',
          backgroundColor: '#007bff',
          color: 'white'
        }} onClick={onEdit}>Editar</button>
        <button style={{
          border: 'none',
          padding: '8px 12px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px',
          backgroundColor: '#dc3545',
          color: 'white'
        }} onClick={onDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default ProductCardAdmin;
