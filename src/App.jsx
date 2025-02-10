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
import StoreHome from './components/Store/HomeStore';
import Inventory from './components/Store/Inventory';
import OrdersStore from './components/Store/OrdersStore';
import Billing from './components/Store/Billing';
import StoreStats from './components/Store/StoreStats';

import AdminLayout from './components/Admin/AdminLayout/AdminLayout';
import Statistics from './components/Admin/pages/Statistics/Statistics';
import Employees from './components/Admin/pages/Employees/Employees';
import Stores from './components/Admin/pages/Stores/Stores';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route 
          path="/admin/home" 
          element= {
            <AdminLayout>
              <AdminHome />
            </AdminLayout>
          }
        />
        <Route 
          path="/admin/statistics" 
          element= {
            <AdminLayout>
              <Statistics />
            </AdminLayout>
          }
        />
        <Route 
          path="/admin/employees" 
          element= {
            <AdminLayout>
              <Employees />
            </AdminLayout>
          }
        />
        <Route 
          path="/admin/stores" 
          element= {
            <AdminLayout>
              <Stores />
            </AdminLayout>
          }
        />
        <Route path="/store/home" element={<StoreHome />} />
        <Route path="/store/inventory" element={<Inventory />} />
        <Route path="/store/ordersstore" element={<OrdersStore />} />
        <Route path="/store/billing" element={<Billing />} />
        <Route path="/store/storestats" element={<StoreStats />} />
      </Routes>
    </Router>
  );
}

export default App;
