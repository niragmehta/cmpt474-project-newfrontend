import React from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
//import Header from "./components/Header";
import Authentication from "./components/Auth/index";

import useCheckAuth from "./utils/useCheckAuth";

const Routes = (props) => {
  console.log("props", props);
  const isAuth = useCheckAuth();

  return (
    <Router>
      {isAuth}
      <Switch>
        <Authentication />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};
Routes.defaultProps = {};

export default Routes;
