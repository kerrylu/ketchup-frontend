import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink 
              className="navbar-item" 
              activeClassName="is-active" 
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="navbar-item"
              activeClassName="is-active"
              to="/profile"
            >
              Profile
            </NavLink>
          </div>
          <div className="navbar-end">
        </div>
      </div>
    </nav>
  );
};

export default Navbar;