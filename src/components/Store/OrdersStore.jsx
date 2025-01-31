import React, { useState } from "react";
import BaseStore from './BaseStore'; // Asegúrate de importar BaseStore
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const OrdersStore = () => {
  const [orders, setOrders] = useState([
    {
      orderId: "001",
      client: {
        name: "Juan Pérez",
        phone: "3001234567",
        address: "Calle Falsa 123, Bogotá",
      },
      products: [
        { name: "Producto A", quantity: 2, available: true },
        { name: "Producto B", quantity: 1, available: false },
      ],
    },
    {
      orderId: "002",
      client: {
        name: "María López",
        phone: "3117654321",
        address: "Carrera 45 #10-20, Medellín",
      },
      products: [
        { name: "Producto C", quantity: 3, available: true },
        { name: "Producto D", quantity: 2, available: true },
      ],
    },
  ]);

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
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
  );
};

export default OrdersStore;
