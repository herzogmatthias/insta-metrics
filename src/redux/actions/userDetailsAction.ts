import { createAction } from "@reduxjs/toolkit";
import { CHANGE_TAB, CHANGE_CHART } from "../types/userDetailsTypes";
import { withPayloadType } from "./genericActionPayloadType";

export const changeTab = createAction(CHANGE_TAB, withPayloadType<number>());
export const changeChart = createAction(
  CHANGE_CHART,
  withPayloadType<number>()
);
