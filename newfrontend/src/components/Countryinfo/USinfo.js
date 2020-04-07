import React from "react";
import {Link} from "react-router-dom";

const USinfo = (props) => {
    return (
        <div class="jumbotron">
            <h1 class="display-3">United States</h1>
            <p class="lead">
            The United States of America (USA), commonly known as the United States (U.S. or US) 
            or America, is a country consisting of 50 states, a federal district, five major self-governing 
            territories, and various possessions.[g] At 3.8 million square miles (9.8 million km2), 
            it is the world's third- or fourth-largest country by total area[c]. Most of the country is 
            located in central North America between Canada and Mexico. With an estimated population of over 
            328 million, the U.S. is the third most populous country in the world. The capital is Washington, 
            D.C., and the most populous city is New York City.
            </p>
            <Link to="/countryinfo" > Back </Link>
        </div>
    )
}

USinfo.propTypes = {};
USinfo.defaultProps = {};

export default USinfo;