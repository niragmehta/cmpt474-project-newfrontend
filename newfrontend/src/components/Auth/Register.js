import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { actions } from "../../app.module";

const useStyles = makeStyles({
  header: {
    marginBottom: "2rem",
  },
  action: {
    marginTop: 48,
  },
  divider: {
    margin: "24px 0",
  },
});

const OutlinedField = (props) => <TextField variant="outlined" {...props} />;

const Register = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    password2: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const updatedUser = { ...user };
    updatedUser[name] = value;
    setUser(updatedUser);
  };

  const onSignUp = async () => {
    const isSuccess = await dispatch(actions.signUp(user));
    if (isSuccess) {
      history.push("/verify");
    }
  };

  const validateInput = () => {
    const passwordRegex =
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

    let pwCheck = new RegExp(passwordRegex);

    if (!pwCheck.test(user.password)) {
      alert("Password must have at least eight characters");
      return;
    }

    if (user.password != user.password2) {
      alert("Passwords must match");
      return;
    }

    onSignUp();
  };

  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Register</h2>
        <form onSubmit={validateInput}>
        <div className="form-group">
            <label>First Name</label>
            <input
              type="firstName"
              className="form-control"
              name="firstName"
              onChange={handleOnChange}
              value={user.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="lastName"
              className="form-control"
              name="lastName"
              onChange={handleOnChange}
              value={user.lastName}
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleOnChange}
              value={user.username}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleOnChange}
              value={user.email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleOnChange}
              value={user.password}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="password2"
              onChange={handleOnChange}
              value={user.password2}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Register
              </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {};
Register.defaultProps = {};

export default Register;
