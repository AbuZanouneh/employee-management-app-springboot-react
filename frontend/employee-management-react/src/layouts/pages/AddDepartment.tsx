import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import { Department } from "../../types/Department";

const AddDepartment: React.FC = () => {
  const [departmentName, setDepartmentName] = useState<string>(""); // Here we saved only department name.
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // To navigate after submitting the form (after saving department).

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartmentName(e.target.value);
  };

  // To handles the form submission event when the user clicks the "Save department" button.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.addDepartment({ departmentName });
      navigate("/departments");
    } catch (err) {
      setError("Failed to add department. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Department</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* Department Name */}
        <div className="mb-3">
          <label className="form-label">Department Name</label>
          <input
            type="text"
            name="departmentName"
            className="form-control"
            value={departmentName}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Submit Button */}
        <button type="submit" className="btn btn-success">
          Save Department
        </button>
        <Link to="/departments" className="btn btn-secondary m-2">
          Back to Departments
        </Link>
      </form>
    </div>
  );
};

export default AddDepartment;
