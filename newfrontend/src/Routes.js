import React from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
//import Header from "./components/Header";
import Authentication from "./components/Auth/index";
import Aboutus from "./components/misc/AboutUs";
import useCheckAuth from "./utils/useCheckAuth";
import ProtectedRoute from "./components/ProtectedRoute";

const Routes = (props) => {
  console.log("props", props);
  const isAuth = useCheckAuth();

  return (
    <Router>
      {isAuth}
      <Switch>
        <ProtectedRoute exact path="/aboutus" component={Aboutus} />
        <Route path="/" component={Authentication} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};
Routes.defaultProps = {};

export default Routes;
