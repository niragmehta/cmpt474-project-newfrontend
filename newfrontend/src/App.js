import React from "react";
import Amplify from "aws-amplify";
import { config } from "./config";
import "./App.css";

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

/* Importing components here....*/
import { Login } from "./components/accounts/Login";
import { Register } from "./components/accounts/Register";
import { About } from "./components/aboutus/About";


Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.region,
    userPoolId: config.cognito.userPoolId,
    userPoolWebClientId: config.cognito.userPoolClientId
  }
});


//We need to set up linking between login.js and register.js
// See https://www.youtube.com/watch?v=Law7wfdg_ls for guide on React Router (It does something similar to ahref)
function App() {
  return (
      <Router>
        <div className="App">
            {/*Redirects the default page to go to login component*/}
            {/*Left for testing*/}
            <Redirect exact from="/" to={"login"} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />

        </div>
      </Router>
  );
}





export default App;
