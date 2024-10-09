import React from "react";
import EmployeeList from "../ui/EmployeeList";

const Employees: React.FC = () => {
  return (
    <div className="text-center p-4">
      <h1>Welcome to Employee Management</h1>
      <p>Manage all your employees here.</p>
      <EmployeeList />
    </div>
  );
};

export default Employees;
