import { createAction } from "@reduxjs/toolkit";
import {
  FETCH_BASIC_INFORMATION,
  USERNAME_IS_VALID,
  BasicUserInformation,
  SELECT_USER,
} from "../types/sidebarTypes";
import axios from "axios";
import { withPayloadType } from "./genericActionPayloadType";
import { URI } from "../config";

export const fetchBasicInformation = createAction(
  FETCH_BASIC_INFORMATION,
  withPayloadType<BasicUserInformation[]>()
);
export const usernameIsValid = createAction(
  USERNAME_IS_VALID,
  withPayloadType<BasicUserInformation>()
);

export const selectUser = createAction(SELECT_USER, withPayloadType<string>());

export function getBasicInformation(match: any, history: any) {
  return (dispatch: any) => {
    axios.get(URI + "user/basic-information").then((res) => {
      dispatch({ type: FETCH_BASIC_INFORMATION, payload: res.data });
      if (res.data.length !== 0) {
        dispatch({ type: SELECT_USER, payload: res.data[0].username });
        let perf = performance
          .getEntriesByType("navigation")
          .find((v) => (v as PerformanceNavigationTiming).type === "reload") as
          | PerformanceNavigationTiming
          | undefined;
        if (!perf || perf!.type !== "reload") {
          history.push({
            pathname: match.url + "/" + res.data[0].username + "/basic",
            state: { tab: 0, username: res.data[0].username },
          });
        }
      }
    });
  };
}
