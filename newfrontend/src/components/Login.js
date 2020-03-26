import React, { Component } from "react";
//import { Link, Redirect } from "react-router-dom";

export class Login extends Component {
  fields = {
    username: "",
    password: ""
  };

  updateVal(e) {
    console.log(e);
    //fields.username = { [e.target.name]: e.target.value };
  }

  onSubmit = e => {
    e.preventDefault();
    //this.props.login(this.state.username, this.state.password);
  };

  onChange = e => this.updateVal(e);

  render() {
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={this.fields.username}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={this.fields.password}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>Don't have an account?</p>
          </form>
        </div>
      </div>
    );
  }
}
