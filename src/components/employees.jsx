import React, { Component } from "react";
import EmployeeRow from "./employeeRow";

class Employees extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      employees: []
    };
  }

  componentDidMount() {
    fetch("http://localhost/php-api/public/listEmployees")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            employees: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log(error);
        }
      );
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div className="alert alert-danger">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="alert">
          <div className="loader" /> Loading...
        </div>
      );
    } else {
      return (
        <div>
          <div className="card mb-3">
            <div className="card-header">Employees</div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellSpacing="0"
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Employee Code</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.employees.map(employee => (
                      <EmployeeRow employee={employee} key={employee.emp_id} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer small text-muted" />
          </div>
        </div>
      );
    }
  }
}

export default Employees;
