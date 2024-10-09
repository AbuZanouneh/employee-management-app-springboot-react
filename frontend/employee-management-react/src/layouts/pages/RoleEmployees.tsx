import React, { useState, useEffect } from "react";
import { Employee } from "../../types/employee";
import api from "../../api/api";
import { useParams, Link } from "react-router-dom";

const RoleEmployees: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [roleName, setRoleName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchRoleEmployees(parseInt(id));
    }
  }, [id]);

  const fetchRoleEmployees = async (roleId: number) => {
    try {
      setLoading(true);
      // Fetch employees by role ID
      const data = await api.getEmployeesByRoleId(roleId);
      setEmployees(data);
      // Fetch role name
      const role = await api.getRoleById(roleId);
      setRoleName(role.roleName);
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
        Employees with Role: {roleName} ({id})
      </h2>
      <Link to="/roles" className="btn btn-secondary mb-3">
        Back to Roles
      </Link>
      {loading ? (
        <div className="loading">Loading employees...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : employees.length === 0 ? (
        <p>No employees found with this role.</p>
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

export default RoleEmployees;
