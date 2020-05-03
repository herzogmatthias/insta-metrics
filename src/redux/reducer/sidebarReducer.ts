import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchBasicInformation,
  usernameIsValid,
  selectUser,
  deleteUser,
} from "../actions/sidebarActions";
import { IBasicUserInformation, ISidebarState } from "../types/sidebarTypes";

const initialState: ISidebarState = {
  users: [],
  loaded: false,
  selectedUser: undefined,
};

export const sidebarReducer = createReducer(initialState, {
  [fetchBasicInformation.type]: (
    state,
    action: PayloadAction<IBasicUserInformation[]>
  ) => {
    state.loaded = true;
    state.users = action.payload;
  },
  [usernameIsValid.type]: (
    state,
    action: PayloadAction<IBasicUserInformation>
  ) => {
    const newUser: IBasicUserInformation = {
      avatar: action.payload.avatar,
      username: action.payload.username,
      name: action.payload.name,
      isBot: JSON.parse(action.payload.isBot as any),
    };
    state.users = [...state.users, newUser];
  },
  [selectUser.type]: (state, action: PayloadAction<string>) => {
    state.selectedUser = state.users.find((u) => u.username === action.payload);
  },
  [deleteUser.type]: (state, action: PayloadAction<string>) => {
    const index = state.users.findIndex(
      (val) => val.username === action.payload
    );
    if (action.payload === state.selectedUser!.username) {
      state.selectedUser = undefined;
    }
    state.users.splice(index, 1);
  },
});
