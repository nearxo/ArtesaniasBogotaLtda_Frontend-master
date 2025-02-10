import React, { useEffect, useState } from "react";
import EmployeeCard from "../../EmployeeCard/EmployeeCard";
import EmployeeFormModal from "../../EmployeeFormModal/EmployeeFromModal";
import ConfirmDeleteModal from "../../../ui/ConfirmDeleteModal/ConfirmDeleteModal";
import "./Employees.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      // const response = await axios.get('');
      // setEmployees(response.data);
      const fakeData = [
        { id: 1, name: "Carlos Sánchez", position: "Gerente de Ventas", email: "carlos.sanchez@example.com", phone: "300-456-7890", image: "" },
        { id: 2, name: "Laura Gómez", position: "Asistente Administrativa", email: "laura.gomez@example.com", phone: "320-654-0987" },
      ];
      setEmployees(fakeData);
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
        // const response = await axios.put(`api/${employee.id}`, employee);
        // setEmployees(employees.map((emp) => (emp.id === employee.id ? response.data : emp)));
      } else {
        // Crear nuevo empleado
        // const response = await axios.post('', employee);
        // setEmployees([...employees, response.data]);
      }
      setModalOpen(false);
    } catch (error) {
      console.error("Error al guardar empleado:", error);
    }
  };
  
  const handleConfirmDelete = async () => {
    try {
      // await axios.delete(`${API_URL}/${employeeToDelete.id}`);
      // setEmployees(employees.filter((emp) => emp.id !== employeeToDelete.id));
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
            key={employee.id}
            {...employee}
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