import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import { Role } from "../../types/Role";

const AddRole: React.FC = () => {
  const [roleName, setRoleName] = useState<string>(""); // Here we saved only role name.
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // To navigate after submitting the form (after saving role).

  // This function is called whenever a change event occurs on an <input> element (specifically text inputs).
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoleName(e.target.value);
  };

  // To handles the form submission event when the user clicks the "Save Role" button.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.addRole({ roleName });
      navigate("/roles");
    } catch (err) {
      setError("Failed to add role. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Role</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        {/* Role Name */}
        <div className="mb-3">
          <label className="form-label">Role Name</label>
          <input
            type="text"
            name="roleName"
            className="form-control"
            value={roleName}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Submit Button */}
        <button type="submit" className="btn btn-success">
          Save Role
        </button>
        <Link to="/roles" className="btn btn-secondary m-2">
          Back to Roles
        </Link>
      </form>
    </div>
  );
};

export default AddRole;
