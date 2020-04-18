import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";
import { sidebarReducer } from "./sidebarReducer";
import { newUserReducer } from "./newUserReducer";
import { loginReducer } from "./loginReducer";
import { userDetailsReducer } from "./userDetailsReducer";
import { advancedStatsReducer } from "./advancedStatsReducer";
import { adminReducer } from "./adminReducer";

export const rootReducer = combineReducers({
  home: homeReducer,
  sidebar: sidebarReducer,
  newUser: newUserReducer,
  login: loginReducer,
  userDetails: userDetailsReducer,
  advancedStats: advancedStatsReducer,
  admin: adminReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
