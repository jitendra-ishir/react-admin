import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">
          <ul className="nav" id="side-menu">
            <li>
              <a href="index.html">
                <i className="fa fa-dashboard fa-fw" /> Dashboard
              </a>
            </li>
            <li>
              <i className="fa fa-bar-chart-o fa-fw" /> Charts
              <span className="fa arrow" />
              <ul className="nav nav-second-level">
                <li>
                  <a href="flot.html">Flot Charts</a>
                </li>
                <li>
                  <a href="morris.html">Morris.js Charts</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
