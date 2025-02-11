import React, { useEffect, useState } from "react";
import EmployeeCard from "../../EmployeeCard/EmployeeCard";
import EmployeeFormModal from "../../EmployeeFormModal/EmployeeFromModal";
import ConfirmDeleteModal from "../../../ui/ConfirmDeleteModal/ConfirmDeleteModal";
import "./Employees.css";
import axios from "axios";
const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://back-artesanias-vue.vercel.app/Usuarios/admins');
        setEmployees(response.data.usuarios); // Accede a "usuarios"
      } catch (error) {
        console.error("Error al obtener empleados:", error);
      }
    };
    fetchEmployees();
  }, []);

  const handleAddEmployee = () => {
    setCurrentEmployee(null);
    setModalOpen(true);
  };

  const handleEditEmployee = (employee) => {
    setCurrentEmployee(employee);
    setModalOpen(true);
  };

  const handleDeleteEmployee = (employee) => {
    setEmployeeToDelete(employee);
    setDeleteModalOpen(true);
  };

  const handleSaveEmployee = async (employee) => {
    try {
      //TODO: Implementar llamada a API
      if (employee.id) {
        // Actualizar empleado
        const response = await axios.put(`https://back-artesanias-vue.vercel.app/Usuarios/usuarios/${employee.idusuario}`, employee);
         setEmployees(employees.map((emp) => (emp.id === employee.id ? response.data : emp)));
      } else {
        // Crear nuevo empleado
        const response = await axios.post('', employee);
         setEmployees([...employees, response.data]);
      }
      setModalOpen(false);
    } catch (error) {
      console.error("Error al guardar empleado:", error);
    }
  };
  
  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`https://back-artesanias-vue.vercel.app/Usuarios/usuarios/${employeeToDelete.id}`,employeeToDelete);
      setEmployees(employees.filter((emp) => emp.id !== employeeToDelete.id));
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
    }
  };

  return (
    <div className="employees-container">
      <h2 className="employees-title">Empleados</h2>
      <button className="add-employee-btn" onClick={handleAddEmployee}>Agregar Empleado</button>

      <div className="employees-grid">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.idusuario} // Usa el id correcto
            name={employee.usuario} // Muestra el usuario
            position={employee.idrol} // Muestra el estilo
            email={employee.correo} // Muestra el correo
            onEdit={() => handleEditEmployee(employee)}
            onDelete={() => handleDeleteEmployee(employee)}
          />
        ))}
      </div>

      {modalOpen && <EmployeeFormModal employee={currentEmployee} onSave={handleSaveEmployee} onClose={() => setModalOpen(false)} />}
      {deleteModalOpen && <ConfirmDeleteModal onConfirm={handleConfirmDelete} onCancel={() => setDeleteModalOpen(false)} />}
    </div>
  );
};

export default Employees;