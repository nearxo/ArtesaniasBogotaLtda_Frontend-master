import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";

const Employees = () => {
  const [employees, setEmployees] = useState([]); // Estado para manejar los datos de los empleados

  // Simulación de datos del backend
  useEffect(() => {
    // Reemplaza esto con una llamada real al backend
    const fetchEmployees = async () => {
      const backendData = [
        {
          id: 1,
          name: "Carlos Sánchez",
          position: "Gerente de Ventas",
          email: "carlos.sanchez@example.com",
          phone: "300-456-7890",
          image: "src/rsc/user.jpg",
        },
        {
          id: 2,
          name: "Laura Gómez",
          position: "Asistente Administrativa",
          email: "laura.gomez@example.com",
          phone: "320-654-0987",
          image: "src/rsc/user.jpg",
        },
      ];
      setEmployees(backendData);
    };

    fetchEmployees();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Empleados</h2>

      {/* Mostrar la EmployeeCard por defecto si no hay datos */}
      {employees.length === 0 && (
        <div className="flex justify-center">
          <EmployeeCard />
        </div>
      )}

      {/* Mostrar las tarjetas cargadas desde el backend */}
      {employees.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              name={employee.name}
              position={employee.position}
              email={employee.email}
              phone={employee.phone}
              image={employee.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Employees;
