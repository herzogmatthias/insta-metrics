import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
import { sidebarReducer } from "./sidebarReducer";
import { newUserReducer } from "./newUserReducer";

export const rootReducer = combineReducers({
  home: homeReducer,
  sidebar: sidebarReducer,
  newUser: newUserReducer
});
export type RootState = ReturnType<typeof rootReducer>;
