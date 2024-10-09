import React, { useState, useEffect } from "react";
import api from "../../api/api";
import { Department } from "../../types/Department";
import DepartmentItem from "./DepartmentItem";
import { Link } from "react-router-dom";

const DepartmentList: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //A hook that runs side effects after the component renders.
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      setLoading(true);
      const data = await api.getDepartments();
      setDepartments(data);
      console.log(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch departments. Please try again later."); // if there any error to catch.
      setDepartments([]);
    } finally {
      setLoading(false);
    }
  };

  // To handle department Delete.
  const handleDelete = async (departmentId: number) => {
    try {
      await api.deleteDepartment(departmentId);
      setDepartments(
        departments.filter(
          (department) => department.departmentId !== departmentId
        )
      );
    } catch (error) {
      console.error(
        `Failed to delete department with ID ${departmentId}:`,
        error
      );
      // If error occur's display a message to the user.
    }
  };

  // if the data still fetching show Loading departments... its like a spinner mechanisms(for user experience).
  if (loading) {
    return <div className="loading">Loading departments...</div>;
  }

  // if there're any errors show them.
  if (error) {
    return <div className="error">{error}</div>;
  }

  // if the loading is null and the loading is false thats mean the data return successfully so show it here.
  return (
    <div className="department-list">
      {departments.length === 0 ? (
        <p>No department found.</p>
      ) : (
        <DepartmentItem departments={departments} onDelete={handleDelete} /> // Pass here the department list.
      )}
    </div>
  );
};

export default DepartmentList;
