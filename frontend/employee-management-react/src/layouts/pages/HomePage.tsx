import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../styles/style.css"; // Import global custom CSS
import "bootstrap-icons/font/bootstrap-icons.css"; // Bootstrap Icon's
import { Link } from "react-router-dom";
import HrBanner from "../../assets/images/HrBanner.jpg";

const HomePage: React.FC = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <div>
      <div className="image-header-container">
        <img
          src={HrBanner} // Replace with your image URL
          alt="Employee Management System"
          className="image-header"
        />
        <h1 className="image-title">Employee Management System</h1>
      </div>
      <div className="content p-4 text-center">
        <p>
          Welcome to the Employee Management System! Use the navigation to
          manage employees, departments, and roles effectively.
        </p>
      </div>
      <div className="services-section text-center p-5">
        <h2>Our Services</h2>
        <div className="row mt-4">
          <div className="col-md-4 mb-4">
            <i
              className="bi bi-people-fill display-3"
              onClick={() => navigate("/employees")}
            ></i>
            <div className="mt-3">
              <Link to="/employees" className="text-decoration-none text-gray">
                Employee Management
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <i
              className="bi bi-building display-3"
              onClick={() => navigate("/departments")}
            ></i>
            <div className="mt-3">
              <Link to="/departments" className="text-decoration-none">
                Department Management
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <i
              className="bi bi-briefcase-fill display-3"
              onClick={() => navigate("/roles")}
            ></i>
            <div className="mt-3">
              <Link to="/roles" className="text-decoration-none">
                Role Management
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
