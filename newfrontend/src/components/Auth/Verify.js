import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";



/**
 * Verify code by email
 */
const Verify = (props) => {

  // const user = useSelector(({ app }) => app.user);
  //
  // if (!user?.username) return <Redirect to="/login" />;



  return (

      <div className="jumbotron jumbotron-fluid">
          <div className="container">
              <h1>You haven't verified your account yet!</h1>
              Check your email for any verification emails.<br></br>
              Click <Link to="/login"> here </Link> to go back to the login page
          </div>
      </div>

  );

};

export default Verify;
