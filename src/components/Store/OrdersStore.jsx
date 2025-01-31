import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaTimesCircle, FaCheck } from 'react-icons/fa';
import BaseStore from './BaseStore';

const OrdersStore = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Llamada al backend para obtener las órdenes
    fetch('/api/orders')
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error('Error al cargar órdenes:', error));
  }, []);

  const handleOrderSent = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === orderId ? { ...order, status: 'Enviada' } : order
      )
    );

    // Envío de la actualización de la orden al backend
    fetch(`/api/orders/${orderId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'Enviada' }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Orden actualizada:', data))
      .catch((error) => console.error('Error al actualizar la orden:', error));
  };

  const styles = {
    container: {
      padding: 'var(--espaciado-grande)',
    },
    header: {
      fontSize: 'var(--fuente-mediana)',
      fontWeight: 'bold',
      marginBottom: 'var(--espaciado-pequeno)',
      color: 'var(--color-primario)',
    },
    orderList: {
      listStyle: 'none',
      padding: 0,
    },
    orderItem: {
      padding: 'var(--espaciado-pequeno) 0',
      borderBottom: '1px solid var(--color-hover)',
    },
    orderHeader: {
      marginBottom: 'var(--espaciado-pequeno)',
    },
    orderInfo: {
      marginBottom: 'var(--espaciado-pequeno)',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      border: '1px solid var(--color-negro)',
    },
    th: {
      backgroundColor: 'var(--color-terciario)',
      padding: 'var(--espaciado-pequeno)',
      textAlign: 'left',
    },
    td: {
      padding: 'var(--espaciado-pequeno)',
      border: '1px solid var(--color-negro)',
    },
    available: {
      color: 'var(--color-secundario)',
      fontWeight: 'bold',
    },
    notAvailable: {
      color: 'var(--color-destaque)',
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: 'var(--color-primario)',
      color: 'white',
      padding: 'var(--espaciado-pequeno) var(--espaciado-grande)',
      borderRadius: 'var(--radio-borde)',
      cursor: 'pointer',
      transition: 'var(--transicion)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--espaciado-pequeno)',
      '&:hover': {
        backgroundColor: 'var(--color-secundario)',
      },
    },
    buttonDisabled: {
      backgroundColor: 'var(--color-gris)',
      cursor: 'default',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Pedidos Pendientes por Enviar</h2>
      {orders.length === 0 ? (
        <p style={styles.loadingText}>No hay pedidos pendientes por enviar.</p>
      ) : (
        <ul style={styles.orderList}>
          {orders.map((order) => (
            <li key={order.orderId} style={styles.orderItem}>
              <div style={styles.orderHeader}>
                <h3 className="text-lg font-semibold">Pedido ID: {order.orderId}</h3>
                <p>
                  <span className="font-bold">Cliente:</span> {order.client.name}
                </p>
                <p>
                  <span className="font-bold">Teléfono:</span> {order.client.phone}
                </p>
                <p>
                  <span className="font-bold">Dirección:</span> {order.client.address}
                </p>
              </div>
              <div>
                <h4 className="text-md font-semibold mb-2">Productos a Enviar</h4>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Producto</th>
                      <th style={styles.th}>Cantidad</th>
                      <th style={styles.th}>Disponibilidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.products.map((product, index) => (
                      <tr key={index}>
                        <td style={styles.td}>{product.name}</td>
                        <td style={styles.td} className="text-center">{product.quantity}</td>
                        <td style={styles.td} className="text-center">
                          {product.available ? (
                            <span style={styles.available}>
                              <FaCheckCircle /> Disponible
                            </span>
                          ) : (
                            <span style={styles.notAvailable}>
                              <FaTimesCircle /> No Disponible
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  onClick={() => handleOrderSent(order.orderId)}
                  style={order.status === 'Enviada' ? { ...styles.button, ...styles.buttonDisabled } : styles.button}
                  disabled={order.status === 'Enviada'}
                >
                  <FaCheck /> {order.status === 'Enviada' ? 'Orden Enviada' : 'Enviar Orden'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersStore;
