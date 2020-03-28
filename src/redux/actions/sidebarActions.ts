import { createAction } from "@reduxjs/toolkit";
import {
  FETCH_BASIC_INFORMATION,
  USERNAME_IS_VALID,
  BasicUserInformation,
  SELECT_USER
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

export function getBasicInformation(history: any) {
  return (dispatch: any) => {
    axios.get(URI + "basic-information").then(res => {
      dispatch({ type: FETCH_BASIC_INFORMATION, payload: res.data });
      if (res.data.length !== 0) {
        history.push("dashboard/" + res.data[0].username);
        dispatch({ type: SELECT_USER, payload: res.data[0].username });
      }
    });
  };
}
