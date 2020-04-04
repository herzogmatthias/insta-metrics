import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Router from "./router/Router";
import store from "./redux/store";
import Axios from "axios";
import AuthService from "./services/AuthService";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

Axios.interceptors.request.use(
  function (config) {
    if (AuthService.getToken()) {
      config.headers.Authorization = `Bearer ${AuthService.getToken()}`;
    }
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

const theme = createMuiTheme({
  overrides: {
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "lightgray",
        },
        "&$selected:hover": {
          backgroundColor: "lightgray",
        },
      },
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "white",
        color: "black",
      },
    },
  },
});

theme.typography.h4 = {
  fontWeight: 400,
  fontSize: "0.9rem",
  "@media (min-width:600px)": {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Provider store={store}>
        <Router />
      </Provider>
    </MuiPickersUtilsProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
