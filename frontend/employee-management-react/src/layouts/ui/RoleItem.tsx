import React from "react";
import { Role } from "../../types/Role";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// Pass here the role list "Role[]" as props
interface RoleItemProps {
  roles: Role[];
  onDelete: (employeeId: number) => void;
}

// RoleItem component is used to display each role's details.
const RoleItem: React.FC<RoleItemProps> = ({ roles, onDelete }) => {
  return (
    <div className="table-responsive p-4 m-4">
      <div className="left-content">
        <h2>Roles List</h2>
        <Link to="/add-role" className="btn btn-primary mb-3">
          Add Role
        </Link>
      </div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Role ID</th>
            <th>Role Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.roleId}>
              <td>{role.roleId}</td>
              <td>{role.roleName}</td>
              <td>
                <Link
                  to={`/roles/${role.roleId}/employees`}
                  className="btn btn-info btn-sm me-2"
                >
                  View
                </Link>{" "}
                <button
                  className="btn btn-danger me-2"
                  onClick={() => onDelete(role.roleId)}
                >
                  Delete
                </button>
                {/* <button className="btn btn-warning">Update</button> */}
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

export default RoleItem;
