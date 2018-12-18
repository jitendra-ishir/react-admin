import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

class EmployeeRow extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    //console.log(props);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = `http://localhost/php-api/public/deleteEmployee/${
      this.props.employee.emp_id
    }`;
    fetch(uri).then(res => res.json());
    this.props.history.push("/employees");
  }
  render() {
    return (
      <tr>
        <td>
          {this.props.employee.first_name} {this.props.employee.last_name}
        </td>
        <td>{this.props.employee.emp_id}</td>
        <td>{this.props.employee.mobile}</td>
        <td>{this.props.employee.email}</td>
        <td>
          <form onSubmit={this.handleSubmit}>
            <NavLink
              to={"edit/" + this.props.employee.emp_id}
              className="btn btn-primary"
            >
              Edit
            </NavLink>
            <input
              type="submit"
              value="Delete"
              className="btn btn-danger m-l-10"
            />
          </form>
        </td>
      </tr>
    );
  }
}

export default withRouter(EmployeeRow);
