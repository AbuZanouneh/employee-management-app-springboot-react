import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Employee } from "../../types/employee";
import { Department } from "../../types/Department";
import { Role } from "../../types/Role";
import api from "../../api/api";

const AddEmployee: React.FC = () => {
  const [employee, setEmployee] = useState<Partial<Employee>>({
    department: null,
    role: null,
    manager: null,
  });
  const [departments, setDepartments] = useState<Department[]>([]); // To retrieve all departments-(for Select option).
  const [roles, setRoles] = useState<Role[]>([]); // To retrieve all roles-(for Select option).
  const [managers, setManagers] = useState<Employee[]>([]); // To retrieve all employees to set a manager-(for Select option).
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // To navigate after submitting the form (after saveing employee).

  useEffect(() => {
    fetchFormOptions();
  }, []);

  // To fetch Department, Employee, and Role - For the select option.
  const fetchFormOptions = async () => {
    try {
      const [departmentsData, rolesData, employeesData] = await Promise.all([
        api.getDepartments(), // One For department.
        api.getRoles(), // One For role.
        api.getEmployees(), // One For employee.
      ]);
      setDepartments(departmentsData);
      setRoles(rolesData);
      setManagers(employeesData);
    } catch (err) {
      setError("Failed to load form data.");
    }
  };

  // This function is called whenever a change event occurs on an <input> element (specifically text inputs).
  // It extracts the name and value properties from the event target (e.target),
  // which correspond to the name attribute of the input and the current value entered by the user.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  }; // in order to reflect any changes in input into obj (e.target) to save these changes or update it.

  // To handle the select option - (Department, Employee, and Role).
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target; // retrieve name and value.
    const id = parseInt(value);
    if (name === "department") {
      const selectedDepartment =
        departments.find((dept) => dept.departmentId === id) || null; // select department ID to store it in employee.
      setEmployee((prev) => ({
        ...prev,
        department: selectedDepartment,
      }));
    } else if (name === "role") {
      const selectedRole = roles.find((role) => role.roleId === id) || null; // select department ID to store it in employee.
      setEmployee((prev) => ({
        ...prev,
        role: selectedRole,
      }));
    } else if (name === "manager") {
      const selectedManager =
        managers.find((mgr) => mgr.employeeId === id) || null; // select employee ID to store it as manageID in employee.
      setEmployee((prev) => ({
        ...prev,
        manager: selectedManager,
      }));
    }
  };

  // To handles the form submission event when the user clicks the "Save Employee" button.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.addEmployee(employee);
      navigate("/employees");
    } catch (err) {
      setError("Failed to add employee. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Employee</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-control"
            value={employee.firstName || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Last Name */}
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            className="form-control"
            value={employee.lastName || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={employee.email || ""}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Department */}
        <div className="mb-3">
          <label className="form-label">Department</label>
          <select
            name="department"
            className="form-select"
            value={employee.department?.departmentId || ""}
            onChange={handleSelectChange}
            required
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.departmentId} value={dept.departmentId}>
                {dept.departmentName}
              </option>
            ))}
          </select>
        </div>
        {/* Role */}
        <div className="mb-3">
          <label className="form-label">Role</label>
          <select
            name="role"
            className="form-select"
            value={employee.role?.roleId || ""}
            onChange={handleSelectChange}
            required
          >
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role.roleId} value={role.roleId}>
                {role.roleName}
              </option>
            ))}
          </select>
        </div>
        {/* Manager */}
        <div className="mb-3">
          <label className="form-label">Manager</label>
          <select
            name="manager"
            className="form-select"
            value={employee.manager?.employeeId || ""}
            onChange={handleSelectChange}
          >
            <option value="">Select Manager</option>
            {managers.map((mgr) => (
              <option key={mgr.employeeId} value={mgr.employeeId}>
                {mgr.firstName} {mgr.lastName}
              </option>
            ))}
          </select>
        </div>
        {/* Submit Button */}
        <button type="submit" className="btn btn-success">
          Save Employee
        </button>
        <Link to="/employees" className="btn btn-secondary m-2">
          Back to Employees
        </Link>
      </form>
    </div>
  );
};

export default AddEmployee;
