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
var secondPassword = "";
const Register = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const updatedUser = { ...user };
    updatedUser[name] = value;
    setUser(updatedUser);
  };

  const handlePassword2Change = (e) => {
    const { name, value } = e.target;
    secondPassword = value;
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
    const phoneRegex = "^[0-9]+$";

    let pwCheck = new RegExp(passwordRegex);
    let phCheck = new RegExp(phoneRegex);

    if (!pwCheck.test(user.password)) {
      alert("Password must have at least eight characters");
      return;
    }

    if (!phCheck.test(user.phone)) {
      alert("Phone number must be numbers only");
      return;
    }
    if (!(user.password == secondPassword)) {
      alert("Passwords do not match " + user.password + " " + secondPassword);
      return;
    }

    onSignUp();
  };

  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Register</h2>
        <form>
          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={handleOnChange}
              value={user.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
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
              name="password"
              onChange={handlePassword2Change}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="phone"
              className="form-control"
              name="phone"
              onChange={handleOnChange}
              value={user.phone}
            />
          </div>
          <div className="form-group">
            <Button className="btn btn-primary" onClick={validateInput}>
              Register
          </Button>
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
