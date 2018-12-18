import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light static-top">
          <a className="navbar-brand mr-1" href="index.html">
            React Admin Panel
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
