import React from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
//import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";

import useCheckAuth from "./utils/useCheckAuth";

const Routes = (props) => {
  console.log("props", props);
  const isAuth = useCheckAuth();

  return (
    <Router>
      {isAuth}
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};
Routes.defaultProps = {};

export default Routes;
