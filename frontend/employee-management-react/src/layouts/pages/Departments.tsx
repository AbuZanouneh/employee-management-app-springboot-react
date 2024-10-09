import React from "react";
import DepartmentList from "../ui/DepartmentList";

const Departments: React.FC = () => {
  return (
    <div className="text-center p-4">
      <h1>Welcome to Department Management</h1>
      <p>Manage all your departments here.</p>
      <DepartmentList />
    </div>
  );
};

export default Departments;
