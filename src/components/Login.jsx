import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginBg from "../assets/loginBg.jpg";

const API_URL = "https://back-artesanias-vue.vercel.app/Login";

const LogIn = () => {
  const [formData, setFormData] = useState({ usuario: "", contrasena: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.estado) {
        // Guardar datos en sessionStorage
        sessionStorage.setItem("idusuario", data.idusuario);
        sessionStorage.setItem("idrol", data.idrol);
        sessionStorage.setItem("idlugar", data.idlugar);
        sessionStorage.setItem("usuario", data.usuario);
        sessionStorage.setItem("correo", data.correo);

        alert("Inicio de sesión exitoso");

        // Redirigir según idrol
        if (data.idrol === 1) navigate("/admin/home");
        if (data.idrol === 2) navigate("/store/home");
      } else {
        alert(data.mensaje || "Error en el inicio de sesión");
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      alert("Hubo un problema al conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${loginBg})` }}>
      <div style={styles.card}>
        <h2 style={styles.title}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="usuario" style={styles.label}>Usuario:</label>
            <input
              type="text"
              name="usuario"
              value={formData.usuario}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="contrasena" style={styles.label}>Contraseña:</label>
            <input
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Cargando..." : "Iniciar Sesión"}
          </button>
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
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
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
};

export default LogIn;
