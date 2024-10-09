import React from "react";
import { Department } from "../../types/Department";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../styles/style.css"; // Import global custom CSS

// Pass here the department list "Department[]" as props
interface DepartmentItemProps {
  departments: Department[];
  onDelete: (departmentId: number) => void;
}

// DepartmentItem component is used to display each department's details.
const DepartmentItem: React.FC<DepartmentItemProps> = ({
  departments,
  onDelete,
}) => {
  return (
    <div className="table-responsive p-4 m-4">
      <div className="left-content">
        <h2>Department List</h2>
        <Link to="/add-department" className="btn btn-primary mb-3">
          Add Department
        </Link>
      </div>
      <table className="table table-bordered table-striped mt-2">
        <thead>
          <tr>
            <th>Department ID</th>
            <th>Department Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.departmentId}>
              <td>{department.departmentId}</td>
              <td>{department.departmentName}</td>
              <td>
                <Link
                  to={`/departments/${department.departmentId}/employees`}
                  className="btn btn-info btn-sm me-2"
                >
                  View
                </Link>

                <button
                  className="btn btn-danger me-2"
                  onClick={() => onDelete(department.departmentId)}
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

export default DepartmentItem;
