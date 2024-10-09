import React from "react";
import RoleList from "../ui/RoleList";

const Roles: React.FC = () => {
  return (
    <div className="text-center p-4">
      <h1>Welcome to Role Management</h1>
      <p>Manage all your roles here.</p>
      <RoleList />
    </div>
  );
};

export default Roles;
