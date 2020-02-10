import { LoginState, PasswordError } from "../types/loginTypes";
import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { onPasswordChange, passwordIsInvalid } from "../actions/loginAction";

const initialState: LoginState = {
  error: "",
  hasError: false,
  password: ""
};

export const loginReducer = createReducer(initialState, {
  [onPasswordChange.type]: (state, action: PayloadAction<string>) => {
    state.password = action.payload;
  },
  [passwordIsInvalid.type]: (state, action: PayloadAction<PasswordError>) => {
    state.error = action.payload.error;
    state.hasError = action.payload.hasError;
  }
});
