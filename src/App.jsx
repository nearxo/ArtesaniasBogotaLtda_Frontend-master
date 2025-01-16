// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/globals.css';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import LogIn from './components/Login'; // Importa el componente LogIn

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} /> {/* Ruta para LogIn */}
      </Routes>
    </Router>
  );
}

export default App;
