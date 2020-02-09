import {
  newUserState,
  NewUserActionTypes,
  addUserError
} from "../types/newUserTypes";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  openNewUserModal,
  closeNewUserModal,
  changeUsernameInput,
  usernameHasError,
  usernameHasNoError
} from "../actions/newUserAction";

const initialState: newUserState = {
  error: "",
  hasError: false,
  open: false,
  username: ""
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
  [usernameHasError.type]: (state, action: PayloadAction<addUserError>) => {
    state.hasError = action.payload.error;
    state.error = action.payload.text;
  },
  [usernameHasNoError.type]: (state, action) => {
    state = initialState;
  }
});
