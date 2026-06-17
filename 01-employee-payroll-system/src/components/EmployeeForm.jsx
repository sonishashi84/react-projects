import { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !department || !salary) {
      alert("Please fill all fields");
      return;
    }

    addEmployee({
      id: Date.now(),
      name,
      department,
      basicSalary: Number(salary)
    });

    setName("");
    setDepartment("");
    setSalary("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Add Employee</h2>

      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <input
        type="number"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;