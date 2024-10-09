import React, { useState, useEffect } from "react";
import { Employee } from "../../types/employee";
import api from "../../api/api";
import { useParams, Link } from "react-router-dom";

const DepartmentEmployees: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [departmentName, setDepartmentName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchDepartmentEmployees(parseInt(id));
    }
  }, [id]);

  const fetchDepartmentEmployees = async (departmentId: number) => {
    try {
      setLoading(true);
      // Fetch employees by department ID
      const data = await api.getEmployeesByDepartmentId(departmentId);
      setEmployees(data);
      // Fetch department name
      const department = await api.getDepartmentById(departmentId);
      setDepartmentName(department.departmentName);
      setError(null);
    } catch (err) {
      setError("Failed to fetch employees. Please try again later.");
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2>
        Employees in Department: {departmentName} ({id})
      </h2>
      <Link to="/departments" className="btn btn-secondary mb-3">
        Back to Departments
      </Link>
      {loading ? (
        <div className="loading">Loading employees...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : employees.length === 0 ? (
        <p>No employees found in this department.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.employeeId}>
                  <td>{employee.employeeId}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DepartmentEmployees;
