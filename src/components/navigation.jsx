import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <ul className="sidebar navbar-nav">
        <li className="nav-item active">
          <NavLink to="/dashboard" exact activeStyle={{ color: "red" }}>
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item active">
          <NavLink to="/employees" exact activeStyle={{ color: "red" }}>
            Employees
          </NavLink>
          <ul>
            <li>
              <NavLink to="/addemployee" exact activeStyle={{ color: "red" }}>
                Add Employee
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item active">
          <NavLink to="/add-item" exact activeStyle={{ color: "red" }}>
            Create Product
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Navigation;
