import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home-page/Home";
import Login from "../pages/login-page/Login";

export default class Router extends React.PureComponent {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/dashboard" component={Home}></Route>
          <Redirect strict from="/" to="login"></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }
}
