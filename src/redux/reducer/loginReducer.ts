import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { onPasswordChange, passwordIsInvalid } from "../actions/loginAction";
import { ILoginState, IPasswordError } from "../types/loginTypes";

const initialState: ILoginState = {
  error: "",
  hasError: false,
  password: "",
};

export const loginReducer = createReducer(initialState, {
  [onPasswordChange.type]: (state, action: PayloadAction<string>) => {
    state.password = action.payload;
  },
  [passwordIsInvalid.type]: (state, action: PayloadAction<IPasswordError>) => {
    state.error = action.payload.error;
    state.hasError = action.payload.hasError;
  },
});
