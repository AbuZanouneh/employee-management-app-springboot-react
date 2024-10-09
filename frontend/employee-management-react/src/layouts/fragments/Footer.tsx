import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">MyApp</h5>
            <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#about" className="text-dark">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-dark">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-dark">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-light">
        © {new Date().getFullYear()} MyApp
      </div>
    </footer>
  );
};

export default Footer;
