import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Verify from "./Verify";

const Authentication = (props) => {
  // force logged in users to go to services page
  const { token } = useSelector(({ app }) => app);

  // TODO: handle proper callback, not fixed url
  if (token) return <Redirect to="/aboutus" />;

  return (
    <Switch>
      <Route path="/verify" component={Verify} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Redirect to="/login" />
    </Switch>
  );
};

Authentication.propTypes = {};
Authentication.defaultProps = {};

export default Authentication;
