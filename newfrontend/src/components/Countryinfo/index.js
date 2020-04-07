import React from "react";

import Grid from "@material-ui/core/Grid";
import Canada from "./Canada.jpg";
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
        <a href="/aboutus" class="card-link">
          Learn More
        </a>
      </div>
    </div>
  );
};

Countryinfo.propTypes = {};
Countryinfo.defaultProps = {};

export default Countryinfo;
