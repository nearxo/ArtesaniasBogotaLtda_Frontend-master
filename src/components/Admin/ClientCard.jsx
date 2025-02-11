import React from "react";

const ClientCard = ({
  name = "Nombre por defecto",
  email = "email@dominio.com",
  phone = "000-000-0000",
  address = "Dirección por defecto",
  image = "src/rsc/user.jpg",
}) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      maxWidth: '300px',
      margin: '0 auto',
      transition: 'transform 0.3s ease-in-out',
      cursor: 'pointer',
      transform: 'scale(1)',
      ':hover': {
        transform: 'scale(1.05)'
      }
    }}>
      <img
        src={image}
        alt="Usuario"
        style={{
          width: '128px',
          height: '128px',
          objectFit: 'cover',
          borderRadius: '50%',
          margin: '0 auto',
          border: '4px solid #e2e8f0',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease-in-out'
        }}
      />
      <h3 style={{
        fontSize: '1.5rem',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: '16px',
        color: '#2d3748'
      }}>{name}</h3>
      <p style={{
        textAlign: 'center',
        color: '#718096',
        marginTop: '8px'
      }}>{email}</p>
      <p style={{
        textAlign: 'center',
        color: '#718096'
      }}>{phone}</p>
      <p style={{
        textAlign: 'center',
        color: '#718096'
      }}>{address}</p>
    </div>
  );
};

export default ClientCard;
