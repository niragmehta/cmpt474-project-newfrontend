import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Aboutus = (props) => {
  const listStyle = {
    listStyleType: "lower-greek", // Change this to no-style if you want
    color: "grey",
  };

  return (
    <div className="jumbotron">
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">
        The Connect People App is a web app designed to bring together people of
        different countries and cultures where information and experience can be
        shared in a friendly and supportive environment.
      </p>
      <hr className="my-4" />
      The team is as follows
      <ul style={listStyle}>
        <li>Nirag Mehta </li>
        <li>Micheal Wong</li>
        <li>Elias</li>
        <li>Archer Zhi</li>
        <li>Jordan Hoang</li>
      </ul>
    </div>
  );
};

Aboutus.propTypes = {};
Aboutus.defaultProps = {};

export default Aboutus;
