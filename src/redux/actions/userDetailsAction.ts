import { createAction } from "@reduxjs/toolkit";
import { CHANGE_TAB } from "../types/userDetailsTypes";
import { withPayloadType } from "./genericActionPayloadType";

export const changeTab = createAction(CHANGE_TAB, withPayloadType<number>());
