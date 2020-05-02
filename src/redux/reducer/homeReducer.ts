import { HomeState } from "../types/homeTypes";
import { add_todos } from "../actions/homeActions";
import { createReducer } from "@reduxjs/toolkit";

const initialState: HomeState = {
  key: "",
};

export const homeReducer = createReducer(initialState, {
  [add_todos.type]: (state, action) => {
    state.key = "";
  },
});
