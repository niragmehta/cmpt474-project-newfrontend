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
