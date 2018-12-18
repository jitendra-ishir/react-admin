import React, { Component } from 'react';

class EditEmployee extends Component {
    handleEdit = e => {
        e.preventDefault();
        const newFirstName = this.firstName.value;
        const newLastName = this.lastName.value;
        const newEmail = this.email.value;
        const newMobile = this.mobile.value;

        const data = {
            newFirstName,
            newLastName,
            newEmail,
            newMobile
        };
        this.props.dispatch({ type: "UPDATE", id: this.props.employee.emp_id, data: data });
    };
    render() {
        return (
            <div className="row" key={this.props.employee.emp_id}>
            <div className="col-lg-6">
              <form onSubmit={this.handleEdit}>
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
                          defaultValue={this.props.employee.firstName}
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
                          defaultValue={this.props.employee.lastName}
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
                      defaultValue={this.props.employee.email}
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
                      defaultValue={this.props.employee.mobile}
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
        );
      }
    }
}
 
export default EditEmployee;