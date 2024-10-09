// API configuration
// Axios is used in React to make HTTP requests to the backend API endpoints(To call spring-boot APIs).
import axios from "axios";
import { Employee } from "../types/employee";
import { Department } from "../types/Department";
import { getRoles } from "@testing-library/react";
import { Role } from "../types/Role";

const API_BASE_URL = "http://localhost:8080/api"; // This is the Spring Boot API base URL(Defined in RestController).

// To return the data of employees.
const api = {
  getEmployees: async (): Promise<Employee[]> => {
    // getEmployees: this function call the backend endpoint that's in Spring App.
    try {
      const response = await axios.get<Employee[]>(`${API_BASE_URL}/employees`); // Add employee end point
      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      throw error;
    }
  },
  // To return the data of Departments.
  getDepartments: async (): Promise<Department[]> => {
    // getDepartments: this function call the backend endpoint that's in Spring App.
    try {
      const response = await axios.get<Department[]>(
        `${API_BASE_URL}/departments`
      ); // Add department end point
      return response.data;
    } catch (error) {
      console.error("Error fetching departments:", error);
      throw error;
    }
  },
  // To return the data of roles.
  getRoles: async (): Promise<Role[]> => {
    // getRoles: this function call the backend endpoint that's in Spring App.
    try {
      const response = await axios.get<Role[]>(`${API_BASE_URL}/roles`); // Add employee end point
      return response.data;
    } catch (error) {
      console.error("Error fetching roles:", error);
      throw error;
    }
  },

  // To return employee by ID.
  getEmployeeById: async (id: number): Promise<Employee> => {
    try {
      const response = await axios.get<Employee>(
        `${API_BASE_URL}/employees/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching employee with ID ${id}:`, error);
      throw error;
    }
  },
  // To return department by ID.
  getDepartmentById: async (id: number): Promise<Department> => {
    try {
      const response = await axios.get<Department>(
        `${API_BASE_URL}/departments/${id}`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching department with ID ${id}:`, error);
      throw error;
    }
  },
  // To return role by ID.
  getRoleById: async (id: number): Promise<Role> => {
    try {
      const response = await axios.get<Role>(`${API_BASE_URL}/roles/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching role with ID ${id}:`, error);
      throw error;
    }
  },

  // To delete employee by ID.
  deleteEmployee: async (id: number): Promise<void> => {
    // void becuse this method just delete dont retrive anything.
    try {
      await axios.delete(`${API_BASE_URL}/employees/${id}`); // use here .delete not .get
    } catch (error) {
      console.error(`Error deleting employee with ID ${id}:`, error);
      throw error;
    }
  },

  // To delete Department by ID.
  deleteDepartment: async (id: number): Promise<void> => {
    // void becuse this method just delete dont retrive anything.
    try {
      await axios.delete(`${API_BASE_URL}/departments/${id}`); // use here .delete not .get
    } catch (error) {
      console.error(`Error deleting department with ID ${id}:`, error);
      throw error;
    }
  },

  // To delete Role by ID.
  deleteRole: async (id: number): Promise<void> => {
    // void becuse this method just delete dont retrive anything.
    try {
      await axios.delete(`${API_BASE_URL}/roles/${id}`); // use here .delete not .get
    } catch (error) {
      console.error(`Error deleting role with ID ${id}:`, error);
      throw error;
    }
  },

  // To save a new employee.
  addEmployee: async (employeeData: Partial<Employee>): Promise<Employee> => {
    try {
      const response = await axios.post<Employee>( // use here .post (To save)
        `${API_BASE_URL}/employees`,
        employeeData
      );
      return response.data;
    } catch (error) {
      console.error("Error adding employee:", error);
      throw error;
    }
  },

  //To save a new role.
  addRole: async (roleData: { roleName: string }): Promise<Role> => {
    // here I put "{ roleName: string }"" because I want to save only one field which is role name,
    // if the role have other field to save I used Partial<Role>.
    try {
      const response = await axios.post<Role>( // use here .post (To save)
        `${API_BASE_URL}/roles`,
        roleData
      );
      return response.data;
    } catch (error) {
      console.error("Error adding role:", error);
      throw error;
    }
  },

  //To save a new department.
  addDepartment: async (departmentData: {
    departmentName: string;
  }): Promise<Department> => {
    try {
      const response = await axios.post<Department>(
        `${API_BASE_URL}/departments`,
        departmentData
      );
      return response.data;
    } catch (error) {
      console.error("Error adding department:", error);
      throw error;
    }
  },

  // To fetch employees by department ID
  getEmployeesByDepartmentId: async (
    departmentId: number
  ): Promise<Employee[]> => {
    try {
      const response = await axios.get<Employee[]>(
        `${API_BASE_URL}/departments/${departmentId}/employees`
      );
      return response.data;
    } catch (error) {
      console.error(
        `Error fetching employees for department ID ${departmentId}:`,
        error
      );
      throw error;
    }
  },

  // To fetch employees by role ID
  getEmployeesByRoleId: async (roleId: number): Promise<Employee[]> => {
    try {
      const response = await axios.get<Employee[]>(
        `${API_BASE_URL}/roles/${roleId}/employees`
      );
      return response.data;
    } catch (error) {
      console.error(`Error fetching employees for role ID ${roleId}:`, error);
      throw error;
    }
  },
};
export default api;

// axios.get(): is used to send a GET request.
// If the request is successful, the response data is returned.
// If there is an error, it’s logged, and the error is thrown to be handled later.
