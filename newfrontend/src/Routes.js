import React from "react";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Header from "./components/Header";
import Authentication from "./components/Auth/index";
import Aboutus from "./components/Aboutus";
import Countryinfo from "./components/Countryinfo";
import useCheckAuth from "./utils/useCheckAuth";
import ProtectedRoute from "./components/ProtectedRoute";

const Routes = (props) => {
  const isAuth = useCheckAuth();

  return (
    <Router>
      {isAuth && <Header />}
      <Switch>
        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/countryinfo" component={Countryinfo} />
        <Route path="/" component={Authentication} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {};
Routes.defaultProps = {};

export default Routes;
