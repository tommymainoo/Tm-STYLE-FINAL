import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark  shadow-sm py-3 px-4">
        <div className="container-fluid">
          <a href="/homepage " className="navbar-brand d-flex align-items-center">
            <img
              src="/TM Style Housing Logo Design.png"
              alt="TM Style Housing"
              className="logo me-2"
              style={{ height: "70px", width: "70px" }}
            />
            <span className="fs-5 fw-bold">TM Style Housing</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <ul className="navbar-nav align-items-center gap-2">
              <li className="nav-item">
                <Link to="/homepage" className="nav-link text-white">
                  Home
                </Link>
              </li>

              {/* Hover Dropdown */}
              <li className="nav-item dropdown hover-dropdown">
                <span className="nav-link dropdown-toggle text-white">
                  Properties
                </span>
                <ul className="dropdown-menu animate__animated animate__fadeIn">
                  <li>
                    <Link to="/comp_five" className="dropdown-item">Juja</Link>
                  </li>
                  <li>
                    <Link to="/getproducts" className="dropdown-item">Parklands</Link>
                  </li>
                  <li>
                    <Link to="/comp_four" className="dropdown-item">Imaara Daima</Link>
                  </li>
                  <li>
                    <Link to="/comp_one" className="dropdown-item">Karen</Link>
                  </li>
                </ul>
              </li>

             

              <li className="nav-item">
                <Link to="/add_products" className="nav-link text-white">Add Products</Link>
              </li>

              <li className="nav-item">
                <Link to="/aboutus" className="nav-link text-white">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;