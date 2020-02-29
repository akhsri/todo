import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default Main;
