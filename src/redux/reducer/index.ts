import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
import { sidebarReducer } from "./sidebarReducer";
import { newUserReducer } from "./newUserReducer";
import { loginReducer } from "./loginReducer";
import { userDetailsReducer } from "./userDetailsReducer";

export const rootReducer = combineReducers({
  home: homeReducer,
  sidebar: sidebarReducer,
  newUser: newUserReducer,
  login: loginReducer,
  userDetails: userDetailsReducer
});
export type RootState = ReturnType<typeof rootReducer>;
