import { createAction } from "@reduxjs/toolkit";
import {
  ON_PASSWORD_CHANGE,
  PASSWORD_IS_INVALID,
  PasswordError
} from "../types/loginTypes";
import { withPayloadType } from "./genericActionPayloadType";
import Axios from "axios";
import { URI } from "../config";

export const onPasswordChange = createAction(
  ON_PASSWORD_CHANGE,
  withPayloadType<string>()
);

export const passwordIsInvalid = createAction(
  PASSWORD_IS_INVALID,
  withPayloadType<PasswordError>()
);

export function login(password: string) {
  return (dispatch: any) => {
    Axios.post(URI + "login", { password: password })
      .then(value => {})
      .catch(error => {
        const usernameError: PasswordError = {
          hasError: error.response.data.error,
          error: error.response.data.text
        };
        dispatch({ type: PASSWORD_IS_INVALID, payload: usernameError });
      });
  };
}
