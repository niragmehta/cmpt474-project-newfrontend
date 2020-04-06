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

    onSignUp();
  };

  return (
    <Grid container direction="column">
      <div className={classes.header}>
        <Typography variant="h5">
          <b>Signup</b>
        </Typography>
      </div>
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <OutlinedField
              label="Username"
              name="username"
              value={user.username}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item>
            <OutlinedField
              label="Password"
              name="password"
              value={user.password}
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <OutlinedField
              label="First Name"
              name="firstName"
              value={user.firstName}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item>
            <OutlinedField
              label="Last Name"
              name="lastName"
              value={user.lastName}
              onChange={handleOnChange}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={8}>
            <OutlinedField
              label="Email"
              name="email"
              value={user.email}
              onChange={handleOnChange}
              fullWidth
            />
          </Grid>
        </Grid>
        <br />
        <OutlinedField
          label="Phone"
          name="phone"
          value={user.phone}
          onChange={handleOnChange}
        />
      </Grid>
      <br />

      <Divider className={classes.divider} />
      <Grid container className={classes.action} justify="flex-end" spacing={2}>
        <Grid item>
          <Link to="/signin">
            <Button>Back</Button>
          </Link>
        </Grid>
        <Grid item>
          <Button onClick={validateInput} variant="contained" disableElevation>
            Register
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

Register.propTypes = {};
Register.defaultProps = {};

export default Register;
