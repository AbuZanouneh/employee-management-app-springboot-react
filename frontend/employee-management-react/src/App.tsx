import "./App.css";
import Footer from "./layouts/fragments/Footer";
import Navbar from "./layouts/fragments/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "./layouts/pages/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Employees from "./layouts/pages/Employees";
import Departments from "./layouts/pages/Departments";
import Roles from "./layouts/pages/Roles";
import AddEmployee from "./layouts/pages/AddEmployee";
import AddRole from "./layouts/pages/AddRole";
import AddDepartment from "./layouts/pages/AddDepartment";
import DepartmentEmployees from "./layouts/pages/DepartmentEmployees";
import RoleEmployees from "./layouts/pages/RoleEmployees";
import AboutUs from "./layouts/pages/AboutUs";
import ContactUs from "./layouts/pages/ContactUs";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Router>
        <Routes>
          {/* Default Route to HomePage */}
          <Route path="/" element={<HomePage />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/add-role" element={<AddRole />} />
          <Route path="/add-department" element={<AddDepartment />} />
          <Route
            path="/departments/:id/employees"
            element={<DepartmentEmployees />}
          />{" "}
          <Route path="/roles/:id/employees" element={<RoleEmployees />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Redirect any unknown route to HomePage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <Footer />
      {/* {" "}
      <Navbar />
      <div className="flex-fill">
        {" "}
        <h1 className="text-center pt-5">Employee Management System</h1>
        <EmployeeList />
        <DepartmentList />
        <RoleList />
      </div>
      <Footer />  */}
    </div>
  );
}

export default App;
