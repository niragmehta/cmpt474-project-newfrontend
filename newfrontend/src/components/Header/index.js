import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../app.module";

export default function ButtonAppBar(props) {
  console.log("ButtonAppBar -> props", props);

  const dispatch = useDispatch();
  const { user } = useSelector(({ app }) => app);

  const handleOnSignOut = () => {
    dispatch(actions.signOut());
  };

  //I"m trying to get the username so we can display it at the top of the screen like the old
  //One but i don't know if we'll have time. This is just test code.
  const hello = async () => {
    console.log("Hello : " + props.username);
  };


  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="nav-link" href="#">
              Blog<span className="sr-only">(current)</span>
            </a>
            <Link to="/aboutus" className="nav-link">
              About Us
            </Link>
            <Link to="/countryinfo" className = "nav-link">
              Country Info
            </Link>
            <Link to="/login" className = "nav-link" onClick={handleOnSignOut}>
              Sign Out
            </Link>



          </div>
        </div>
      </nav>
  );






}
