import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
import { sidebarReducer } from "./sidebarReducer";
import { newUserReducer } from "./newUserReducer";
import { loginReducer } from "./loginReducer";

export const rootReducer = combineReducers({
  home: homeReducer,
  sidebar: sidebarReducer,
  newUser: newUserReducer,
  login: loginReducer
});
export type RootState = ReturnType<typeof rootReducer>;
