function EmployeeList({ employees, deleteEmployee }) {
  return (
    <div>
      <h2>Employee List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Net Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => {
            const hra = emp.basicSalary * 0.2;
            const allowance = emp.basicSalary * 0.1;

            const netSalary =
              emp.basicSalary + hra + allowance;

            return (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.department}</td>
                <td>₹{emp.basicSalary}</td>
                <td>₹{netSalary}</td>

                <td>
                  <button
                    onClick={() =>
                      deleteEmployee(emp.id)
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;