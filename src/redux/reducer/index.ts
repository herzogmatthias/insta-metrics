import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
import { sidebarReducer } from "./sidebarReducer";
import { newUserReducer } from "./newUserReducer";
import { loginReducer } from "./loginReducer";
import { userDetailsReducer } from "./userDetailsReducer";
import { advancedStatsReducer } from "./advancedStatsReducer";

export const rootReducer = combineReducers({
  home: homeReducer,
  sidebar: sidebarReducer,
  newUser: newUserReducer,
  login: loginReducer,
  userDetails: userDetailsReducer,
  advancedStats: advancedStatsReducer
});
export type RootState = ReturnType<typeof rootReducer>;
