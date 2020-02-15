import { SidebarState, BasicUserInformation } from "../types/sidebarTypes";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchBasicInformation,
  usernameIsValid,
  selectUser
} from "../actions/sidebarActions";

const initialState: SidebarState = {
  users: [],
  loaded: false,
  selectedUser: undefined
};

export const sidebarReducer = createReducer(initialState, {
  [fetchBasicInformation.type]: (
    state,
    action: PayloadAction<BasicUserInformation[]>
  ) => {
    state.loaded = true;
    state.users = action.payload;
  },
  [usernameIsValid.type]: (
    state,
    action: PayloadAction<BasicUserInformation>
  ) => {
    state.users = [...state.users, action.payload];
  },
  [selectUser.type]: (state, action: PayloadAction<string>) => {
    state.selectedUser = state.users.find(u => u.username === action.payload);
  }
});
