import React, { useState } from "react";
import { NavLink } from "react-router";

const Navbar = ({ showForm = true }) => { 
  return (
    <nav className="navbar navbar-expand-lg py-4 bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="fs-2 logoName" to="/">
          Madi<span>care+</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Service">
                Service
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {showForm && (
            <form className="d-flex ms-5" role="search">
              <button
                className="px-5 py-3 rounded-5 bg-primary border-0 text-white rounded-lg"
                type="submit"
              >
                Contact
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
