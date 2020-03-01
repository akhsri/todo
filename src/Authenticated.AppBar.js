import React, { Component, Fragment } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  HashRouter,
  Link
} from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import Dashboard from "./Dashboard";
import LandingPage from "./LandingPage";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const logout = () => {
  localStorage.removeItem("token");
};

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <Button color="inherit" className="btn" onClick={logout}>
                Logout
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>

      <style>
        {`
              .btn{
                  color: white;
                  font-weight: bold;
              }
          `}
      </style>
    </Fragment>
  );
}
