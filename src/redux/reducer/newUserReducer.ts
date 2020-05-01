import {
  newUserState,
  NewUserActionTypes,
  AddUserError,
} from "../types/newUserTypes";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  openNewUserModal,
  closeNewUserModal,
  changeUsernameInput,
  usernameHasError,
  usernameHasNoError,
  handleCheck,
  checkUsername,
} from "../actions/newUserAction";

const initialState: newUserState = {
  error: "",
  checkingUser: false,
  hasError: false,
  open: false,
  isBot: false,
  username: "",
};

export const newUserReducer = createReducer(initialState, {
  [openNewUserModal.type]: (state, action) => {
    state.open = true;
  },
  [closeNewUserModal.type]: (state, action) => {
    state.open = false;
  },
  [changeUsernameInput.type]: (state, action: PayloadAction<string>) => {
    state.username = action.payload;
  },
  [usernameHasError.type]: (state, action: PayloadAction<AddUserError>) => {
    state.hasError = action.payload.error;
    state.error = action.payload.text;
    state.checkingUser = false;
  },
  [usernameHasNoError.type]: (state, action) => {
    state = initialState;
  },
  [handleCheck.type]: (state, action: PayloadAction<boolean>) => {
    state.isBot = action.payload;
  },
  [checkUsername.type]: (state, action) => {
    state.checkingUser = true;
  },
});
