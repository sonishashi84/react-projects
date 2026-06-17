import { useState } from 'react'
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import PayrollSummary from "./components/PayrollSummary";
import employeesData from "./data/employees";

import './App.css'

function App() {
  const [employees, setEmployees] =
    useState(employeesData);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter((emp) => emp.id !== id)
    );
  };

  return (
 <div className="container">
      <h1>Employee Payroll Management</h1>

      <PayrollSummary employees={employees} />

      <EmployeeForm addEmployee={addEmployee} />

      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
      />
    </div>
  )
}

export default App
