import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheckCircle, FaTimesCircle, FaCheck } from "react-icons/fa";
import BaseStore from "./BaseStore";

const API_URL = "https://backend-vercel-lime.vercel.app";

const OrdersStore = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Obtener las órdenes desde el backend
    axios
      .get(`${API_URL}/Angie/ordenes`)
      .then((response) => setOrders(response.data))
      .catch((error) => console.error("Error al cargar órdenes:", error));
  }, []);

  const handleOrderSent = async (orderId) => {
    try {
      await axios.put(`${API_URL}/angie/orden/${orderId}`, { status: "Enviada" });

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.orderId === orderId ? { ...order, status: "Enviada" } : order
        )
      );

      alert("Orden enviada con éxito.");
    } catch (error) {
      console.error("Error al actualizar la orden:", error);
      alert("Hubo un error al enviar la orden.");
    }
  };

  return (
    <BaseStore>
      <div style={styles.container}>
        <h2 style={styles.header}>Pedidos Pendientes por Enviar</h2>
        {orders.length === 0 ? (
          <p>No hay pedidos pendientes por enviar.</p>
        ) : (
          <ul style={styles.orderList}>
            {orders.map((order) => (
              <li key={order.orderId} style={styles.orderItem}>
                <div style={styles.orderHeader}>
                  <h3>Pedido ID: {order.orderId}</h3>
                  <p>
                    <strong>Cliente:</strong> {order.clientName}
                  </p>
                  <p>
                    <strong>Email:</strong> {order.email}
                  </p>
                  <p>
                    <strong>Ubicación:</strong> {order.location}
                  </p>
                  <p>
                    <strong>Estado:</strong> {order.status}
                  </p>
                </div>

                <button
                  onClick={() => handleOrderSent(order.orderId)}
                  style={
                    order.status === "Enviada"
                      ? { ...styles.button, ...styles.buttonDisabled }
                      : styles.button
                  }
                  disabled={order.status === "Enviada"}
                >
                  <FaCheck /> {order.status === "Enviada" ? "Orden Enviada" : "Enviar Orden"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </BaseStore>
  );
};

// 🔹 Estilos en línea
const styles = {
  container: {
    padding: "20px",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  orderList: {
    listStyle: "none",
    padding: 0,
  },
  orderItem: {
    padding: "15px",
    borderBottom: "1px solid #ddd",
  },
  orderHeader: {
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
    cursor: "default",
  },
};

export default OrdersStore;
