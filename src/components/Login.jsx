import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Usuarios de prueba
    const users = [
      { email: "administrador@gmail.com", password: "GrupoBArtesanias", role: "admin" },
      { email: "tienda@gmail.com", password: "GrupoBArtesanias", role: "store" },
    ];

    // Validar credenciales
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      alert("Inicio de sesión exitoso");
      // Redirigir según el rol
      if (user.role === "admin") navigate("/admin/home");
      if (user.role === "store") navigate("/store/home");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Correo Electrónico:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Contraseña:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

// 🔹 Estilos en línea
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "350px",
  },
  title: {
    fontFamily: "'Lora', serif",
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#544544",
  },
};

export default LogIn;
