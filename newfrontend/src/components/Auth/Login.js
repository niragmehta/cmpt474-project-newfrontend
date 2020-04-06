import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../../app.module";
import Button from "@material-ui/core/Button";

// See https://reactjs.org/docs/forms.html#controlled-components on how I dealt with forms

const Login = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);

  const onLogin = async () => {
    console.log("pre login request");
    if (!username) {
      setErr("Username cannot be left blank.");
      return;
    }

    if (!password) {
      setErr("Password cannot be left blank.");
      return;
    }

    const errCode = await dispatch(actions.signIn(username, password));
    if (errCode === "UserNotConfirmedException") {
      setErr("Check your email for a verification link from us.");
    }

    if (errCode === "NotAuthorizedException") {
      setErr("Incorrect username or password.");
    }
  };

  return (
    <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Login</h2>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <Button
              variant="contained"
              className="btn btn-primary"
              onClick={onLogin}
            >
              Login
            </Button>
          </div>
          <p>Don't have an account?</p>
          <Link to="/register"> Register </Link>
        </form>
      </div>
    </div>
  );
};

export default Login; ///From some tutorial....
