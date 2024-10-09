import { Department } from "./Department";
import { Role } from "./Role";

//Employee interface
export interface Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  department: Department | null;
  role: Role | null;
  manager: Employee | null;
  // departmentName: string;
  // roleName: string;
  // managerName: string | null;
}

// ** We used an interface here **//
// ** Because it helps to ensure type safety when interacting with employee data in your React app. **//
