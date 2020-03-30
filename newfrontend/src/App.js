import React from "react";
import { Login } from "./components/Login";
import Amplify from "aws-amplify";
import { config } from "./config";
import "./App.css";
import { Register } from "./components/Register"

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.region,
    userPoolId: config.cognito.userPoolId,
    userPoolWebClientId: config.cognito.userPoolClientId
  }
});

//We need to set up linking between login.js and Register.js
function App() {
  return (
    <div className="App">
      <Login></Login>
      {/*<Register> </Register>*/}
    </div>
  );
}





export default App;
