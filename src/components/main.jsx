import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import Employees from "./employees";
import AddEmployee from "./addEmployee";

class Main extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/employees" component={Employees} />
          <Route path="/addemployee" component={AddEmployee} />
        </Switch>
      </div>
    );
  }
}

export default Main;
