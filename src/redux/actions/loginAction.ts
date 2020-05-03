import { createAction } from "@reduxjs/toolkit";
import {
  ON_PASSWORD_CHANGE,
  PASSWORD_IS_INVALID,
  IPasswordError,
} from "../types/loginTypes";
import { withPayloadType } from "./genericActionPayloadType";
import Axios from "axios";
import { URI } from "../config";
import AuthService from "../../services/AuthService";

export const onPasswordChange = createAction(
  ON_PASSWORD_CHANGE,
  withPayloadType<string>()
);

export const passwordIsInvalid = createAction(
  PASSWORD_IS_INVALID,
  withPayloadType<IPasswordError>()
);

export function login(password: string, history: any) {
  return (dispatch: any) => {
    Axios.post(URI + "login", { password: password })
      .then((value) => {
        AuthService.setToken(value.data.token);
        history.push("dashboard");
      })
      .catch((error) => {
        const usernameError: IPasswordError = {
          hasError: error.response.data.error,
          error: error.response.data.text,
        };
        dispatch({ type: PASSWORD_IS_INVALID, payload: usernameError });
      });
  };
}
