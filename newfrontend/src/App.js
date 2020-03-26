import React from "react";
import { Login } from "./components/Login";
import Amplify from "aws-amplify";
import { config } from "./config";
import "./App.css";

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.region,
    userPoolId: config.cognito.userPoolId,
    userPoolWebClientId: config.cognito.userPoolClientId
  }
});

function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
