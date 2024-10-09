import React from "react";
import { Employee } from "../../types/employee";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// Pass here the employee list "Employee[]" as props
interface EmployeeItemProps {
  employees: Employee[];
  onDelete: (employeeId: number) => void;
}

// EmployeeItem component is used to display each employee's details.
const EmployeeItem: React.FC<EmployeeItemProps> = ({ employees, onDelete }) => {
  return (
    <div className="table-responsive p-4 m-4">
      <div className="left-content">
        <h2>Employee List</h2>
        <Link to="/add-employee" className="btn btn-primary mb-3">
          Add Employee
        </Link>
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Role</th>
            <th>Manager</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>
                {employee.firstName} {employee.lastName}
              </td>
              <td>{employee.email}</td>
              <td>{employee.department?.departmentName || "N/A"}</td>
              <td>{employee.role?.roleName || "N/A"}</td>
              <td>
                {employee.manager
                  ? `${employee.manager.firstName} ${employee.manager.lastName}`
                  : "N/A - CEO"}
              </td>
              <td>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => onDelete(employee.employeeId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="left-content">
        <Link to="/" className="btn btn-secondary mb-2">
          Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default EmployeeItem;
