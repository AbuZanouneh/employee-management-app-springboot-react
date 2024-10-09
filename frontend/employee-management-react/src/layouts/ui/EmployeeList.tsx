import React, { useState, useEffect } from "react";
import api from "../../api/api";
import EmployeeItem from "./EmployeeItem";
import { Employee } from "../../types/employee";
import { Link } from "react-router-dom";

//**(State Hooks)**
// const [employees, setEmployees] = useState<Employee[]>([]);:
// employees: Stores the list of employees fetched from the backend.
// setEmployees: Function to update the employee list.
// useState<Employee[]>([]): Initializes employees with an empty array.
// And the same thing for Loading and error:
// loading: Indicates whether the data is currently being fetched.
// setLoading: Function to update the loading state.
// useState<boolean>(true): Initializes loading to true (loading is in progress initially).
// error: Stores an error message if the request fails.**//

const EmployeeList: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //A hook that runs side effects after the component renders.
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      setLoading(true); // Sets loading to true before starting the data fetch.
      const data = await api.getEmployees(); // Waits for the getEmployees(function in api.js) function to retrieve data from the backend.
      setEmployees(data); // Updates the employees state with the fetched data. So now employees holds the data that come from api.
      console.log(data);
      console.log(employees);
      setError(null); // Clears any previous error if the fetch is successful.
    } catch (err) {
      setError("Failed to fetch employees. Please try again later."); // if there any error to catch.
      setEmployees([]); // Empty the employee list if there an error
    } finally {
      setLoading(false); // Sets loading to false whether the fetch was successful or not.
    }
  };

  // To handle employee Delete.
  const handleDelete = async (employeeId: number) => {
    try {
      await api.deleteEmployee(employeeId);
      setEmployees(employees.filter((emp) => emp.employeeId !== employeeId));
    } catch (error) {
      console.error(`Failed to delete employee with ID ${employeeId}:`, error);
      // If error occur's display a message to the user.
    }
  };

  // if the data still fetching show Loading employees... its like a spinner mechanisms(for user experience).
  if (loading) {
    return <div className="loading">Loading employees...</div>;
  }

  // if there're any errors show them.
  if (error) {
    return <div className="error">{error}</div>;
  }

  // if the loading is null and the loading is false thats mean the data return successfully so show it here.
  return (
    <div className="employee-list">
      {/* <h2>Employee List</h2> */}
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <EmployeeItem employees={employees} onDelete={handleDelete} /> // Pass here the employee list.
      )}
    </div>
  );
};

export default EmployeeList;
