import React, { Component } from "react";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      msg: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = e => {
    e.preventDefault();
    const firstName = this.firstName.value;
    const lastName = this.lastName.value;
    const email = this.email.value;
    const mobile = this.mobile.value;

    const data = {
      firstName,
      lastName,
      email,
      mobile
    };

    fetch("http://localhost/php-api/public/addEmployee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    this.setState({
      msg: "Data successully saved."
    });
  };
  render() {
    return (
      <div>
        <div className={"row " + (this.state.msg ? "show" : "hidden")}>
          <div className="col-lg-12">
            <div className="alert alert-info">{this.state.msg}</div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">Add Employee</div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-6">
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control"
                            placeholder="First name"
                            ref={input => (this.firstName = input)}
                          />
                          <label htmlFor="firstName">First name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="lastName"
                            className="form-control"
                            placeholder="Last name"
                            ref={input => (this.lastName = input)}
                          />
                          <label htmlFor="lastName">Last name</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Email address"
                        ref={input => (this.email = input)}
                      />
                      <label htmlFor="email">Email address</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-label-group">
                      <input
                        type="text"
                        id="mobile"
                        className="form-control"
                        placeholder="Mobile"
                        ref={input => (this.mobile = input)}
                      />
                      <label htmlFor="mobile">Mobile</label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-label-group">
                      <div className="col-lg-4 btn-save">
                        <button className="btn btn-primary btn-block">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEmployee;
