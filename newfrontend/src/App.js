import React, { useEffect } from "react";
import configureStore from "./configureStore";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { actions } from "./app.module";
import Routes from "./Routes";
import Amplify from "aws-amplify";
import { config } from "./config";
import "./App.css";

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
});
function App() {
  const store = configureStore();

  useEffect(() => {
    store.dispatch(actions.authenticate());
  }, []);

  return (
    <div>
      <Provider store={store}>
        <CssBaseline />
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
