import { SidebarState, BasicUserInformation } from "../types/sidebarTypes";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchBasicInformation,
  usernameIsValid,
  selectUser
} from "../actions/sidebarActions";

const initialState: SidebarState = {
  users: [
    {
      name: "Kylie 🤍",
      username: "kyliejenner",
      avatar:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/87670422_189951408927554_4725612852042268672_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=-lhzgGax6dcAX_rHvLZ&oh=6ae93e384dee539b0daf5912d76d39f6&oe=5E945131"
    }
  ],
  loaded: true,
  selectedUser: {
    name: "Kylie 🤍",
    username: "kyliejenner",
    avatar:
      "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/87670422_189951408927554_4725612852042268672_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=-lhzgGax6dcAX_rHvLZ&oh=6ae93e384dee539b0daf5912d76d39f6&oe=5E945131"
  }
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
