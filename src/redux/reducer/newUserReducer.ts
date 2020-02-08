import { newUserState, NewUserActionTypes } from "../types/newUserTypes";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  open_new_user_modal,
  close_new_user_modal,
  change_username_input
} from "../actions/newUserAction";

const initialState: newUserState = {
  error: "",
  hasError: false,
  open: false,
  username: ""
};

export const newUserReducer = createReducer(initialState, {
  [open_new_user_modal.type]: (state, action) => {
    state.open = true;
  },
  [close_new_user_modal.type]: (state, action) => {
    state.open = false;
  },
  [change_username_input.type]: (state, action: PayloadAction<string>) => {
    state.username = action.payload;
  }
});
