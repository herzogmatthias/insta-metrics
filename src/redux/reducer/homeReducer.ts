import { HomeState, ADD_TODO } from "../types/homeTypes";
import { add_todos } from "../actions/homeActions";
import { createReducer } from "@reduxjs/toolkit";

const initialState: HomeState = {
  todos: 0,
  headline: "My Todos"
};

export const homeReducer = createReducer(initialState, {
  [add_todos.type]: (state, action) => {
    state.todos += action.payload;
  }
});
