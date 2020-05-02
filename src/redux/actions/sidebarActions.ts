import { createAction } from "@reduxjs/toolkit";
import {
  FETCH_BASIC_INFORMATION,
  USERNAME_IS_VALID,
  BasicUserInformation,
  SELECT_USER,
  DELETE_USER,
} from "../types/sidebarTypes";
import axios from "axios";
import { withPayloadType } from "./genericActionPayloadType";
import { URI } from "../config";
import { CHANGE_TAB } from "../types/userDetailsTypes";
import { tabRoutes } from "../../components/user-details-component/tabRoutes";

export const fetchBasicInformation = createAction(
  FETCH_BASIC_INFORMATION,
  withPayloadType<BasicUserInformation[]>()
);
export const usernameIsValid = createAction(
  USERNAME_IS_VALID,
  withPayloadType<BasicUserInformation>()
);

export const deleteUser = createAction(DELETE_USER, withPayloadType<string>());

export const selectUser = createAction(SELECT_USER, withPayloadType<string>());

export function getBasicInformation(match: any, history: any, location: any) {
  return (dispatch: any) => {
    axios.get(URI + "user/basic-information").then((res) => {
      dispatch({ type: FETCH_BASIC_INFORMATION, payload: res.data });
      if (res.data.length !== 0) {
        let perf = performance
          .getEntriesByType("navigation")
          .find((v) => (v as PerformanceNavigationTiming).type === "reload") as
          | PerformanceNavigationTiming
          | undefined;
        console.log(perf);
        if (perf && perf!.type === "reload") {
          const e = location.state as any;
          console.log(e);
          if (e && e.username) {
            dispatch({ type: SELECT_USER, payload: e.username });
          }
          if (e && e.tab != undefined) {
            console.log(e.tab);
            dispatch({ type: CHANGE_TAB, payload: e.tab });
          }
          if (e) {
            history.push({
              pathname: match.url + "/" + e.username + "/" + tabRoutes[e.tab],
              state: { tab: e.tab, username: e.username },
            });
          }
        } else {
          dispatch({ type: SELECT_USER, payload: res.data[0].username });
          history.push({
            pathname: match.url + "/" + res.data[0].username + "/basic",
            state: { tab: 0, username: res.data[0].username },
          });
        }
      }
    });
  };
}

export function delUser(username: string) {
  return (dispatch: any) => {
    axios
      .get(URI + "user/delete/" + username)
      .then((res) => {
        dispatch({ type: DELETE_USER, payload: username });
      })
      .catch((err) => {});
  };
}
