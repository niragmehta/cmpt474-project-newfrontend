<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { actions } from "../../app.module";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  invisible: {
    flexGrow: 1,
    visibility: "hidden",
  },
  account: {
    marginRight: 12,
  },
  home: {
    textDecoration: "None",
    color: "white",
  },
}));

export default function ButtonAppBar(props) {
  console.log("ButtonAppBar -> props", props);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user } = useSelector(({ app }) => app);

  const handleOnSignOut = () => {
    dispatch(actions.signOut());
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.invisible}>
            <MenuIcon />
          </IconButton>
          <Link to="/aboutus">
            <Button color="secondary" variant="contained">
              About us
            </Button>
          </Link>
          <Button color="secondary" onClick={handleOnSignOut}>
            Sign out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
=======
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
    <div>
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
                        <a className="nav-link btn btn-primary btn-block" href="#">
                            Blog<span className="sr-only">(current)</span>
                        </a>
                        <Link to="/aboutus" className="nav-link btn btn-warning btn-block">
                            About Us
                        </Link>
                        <button className="nav-link btn btn-danger btn-block" onClick={handleOnSignOut}>
                            Sign Out
                        </button>
                    </div>
                </div>
            </nav>
    </div>
  );



}
>>>>>>> 4b25a187777680999884f79eb410a880e7bb42e1
