import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/globals.css';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import LogIn from './components/Login';
import AdminHome from './components/Admin/HomeAdmin';
import ClientHome from './components/Client/HomeClient';
import StoreHome from './components/Store/HomeStore';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/client/home" element={<ClientHome />} />
        <Route path="/store/home" element={<StoreHome />} />
      </Routes>
    </Router>
  );
}

export default App;

