import React from "react";

import ProtectedRoute from "../ProtectedRoute/index";
import { Switch, Route, Redirect } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Canada from "./Canada.png";
import US from "./us.png";
import Netherlands from "./nl.png";
import Sweden from "./se.png";

import Canadainfo from "./Canadainfo";
import USinfo from "./USinfo";
import Netherlandsinfo from "./Netherlandsinfo";
import Swedeninfo from "./Swedeninfo";


const Countries = (props) => {
  return (
    <Switch>
      <ProtectedRoute path="/canada" component={Canadainfo} />
      <ProtectedRoute path="/us" component={USinfo} />
      <ProtectedRoute path="/netherlands" component={Netherlandsinfo} />
      <ProtectedRoute path="/sweden" component={Swedeninfo} />
      <ProtectedRoute path="/countrylist" component={Countryinfo} />
      <Redirect to="/countrylist" />
    </Switch>
  )
}

Countries.propTypes = {};
Countries.defaultProps = {};

export default Countries;

const Countryinfo = (props) => {
  return (
    <div>
      <div class="card mb-3">
        <h3 class="card-header">Card header</h3>
        <div class="card-body">
          <h5 class="card-title">Canada</h5>
        </div>
        <img class="countrytile" src={Canada} alt="Card image" />
        <div class="card-body">
          <p class="card-text">
            Canada is a country in the northern part of North America.
          </p>
        </div>
      </div>
      <div class="card-body">
        <a href="/canada" class="card-link">
          Learn More
        </a>
      </div>
      <div class="card mb-3">
        <h3 class="card-header">Card header</h3>
        <div class="card-body">
          <h5 class="card-title">United States</h5>
        </div>
        <img class="countrytile" src={US} alt="Card image" />
        <div class="card-body">
          <p class="card-text">
            The United States is a country in the central part of North America.
          </p>
        </div>
      </div>
      <div class="card-body">
        <a href="/us" class="card-link">
          Learn More
        </a>
      </div>
      <div class="card mb-3">
        <h3 class="card-header">Card header</h3>
        <div class="card-body">
          <h5 class="card-title">Netherlands</h5>
        </div>
        <img class="countrytile" src={Netherlands} alt="Card image" />
        <div class="card-body">
          <p class="card-text">
            The Netherlands is a country in the western part of Europe.
          </p>
        </div>
      </div>
      <div class="card-body">
        <a href="/netherlands" class="card-link">
          Learn More
        </a>
      </div>
      <div class="card mb-3">
        <h3 class="card-header">Card header</h3>
        <div class="card-body">
          <h5 class="card-title">Sweden</h5>
        </div>
        <img class="countrytile" src={Sweden} alt="Card image" />
        <div class="card-body">
          <p class="card-text">
            Sweden is a country in the northern part of Europe.
          </p>
        </div>
      </div>
      <div class="card-body">
        <a href="/sweden" class="card-link">
          Learn More
        </a>
      </div>
    </div>	
  );
};

Countryinfo.propTypes = {};
Countryinfo.defaultProps = {};

