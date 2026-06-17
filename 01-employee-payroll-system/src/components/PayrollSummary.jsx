function PayrollSummary({ employees }) {
  const totalPayroll = employees.reduce(
    (total, emp) => {
      const netSalary =
        emp.basicSalary +
        emp.basicSalary * 0.2 +
        emp.basicSalary * 0.1;

      return total + netSalary;
    },
    0
  );

  return (
    <div className="summary">
      <h2>Payroll Summary</h2>

      <p>
        Total Employees: <b>{employees.length}</b>
      </p>

      <p>
        Total Payroll: <b>₹{totalPayroll}</b>
      </p>
    </div>
  );
}

export default PayrollSummary;