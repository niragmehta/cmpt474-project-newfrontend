import React, { Component } from "react";
//import { Link, Redirect } from "react-router-dom";

export class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: 'defaultuser',
      password: 'defaultps'
    }

    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //Executes when you click the submit button.
  onSubmit = e => {
    e.preventDefault();
    //this.props.login(this.state.username, this.state.password); //We don't have a login page yet...
  };

  onChangeUser(event){
    console.log(event.target.value) //debug purposes
    this.setState({ username: event.target.value });
  }

  onChangePassword(event){
    console.log(event.target.value)
    this.setState({password: event.target.value})
  }

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
                value={this.state.username}
                onChange={this.onChangeUser}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
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
