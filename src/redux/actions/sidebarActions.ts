import { createAction } from "@reduxjs/toolkit";
import {
  FETCH_BASIC_INFORMATION,
  USERNAME_IS_VALID,
  BasicUserInformation
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

export function getBasicInformation() {
  return (dispatch: any) => {
    axios.get(URI + "basic-information").then(res => {
      dispatch({ type: FETCH_BASIC_INFORMATION, payload: res.data });
    });
  };
}
