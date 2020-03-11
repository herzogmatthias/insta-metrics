import * as React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home-page/Home";
import Login from "../pages/login-page/Login";
import AuthService from "../services/AuthService";

export default class Router extends React.PureComponent {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/dashboard" component={Home}></Route>
          <Redirect strict from="/" to="dashboard"></Redirect>
        </Switch>
      </BrowserRouter>
    );
  }
}

export const ProtectedRoute = ({ component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (AuthService.getToken() != null) {
          return React.createElement(component, props);
        } else {
          return <Redirect to="/"></Redirect>;
        }
      }}
    ></Route>
  );
};
