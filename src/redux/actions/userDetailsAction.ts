import { createAction } from "@reduxjs/toolkit";
import {
  CHANGE_TAB,
  CAROUSEL_GO_BACK,
  CAROUSEL_GO_FORWARD
} from "../types/userDetailsTypes";
import { withPayloadType } from "./genericActionPayloadType";

export const changeTab = createAction(CHANGE_TAB, withPayloadType<number>());
export const carouselGoBack = createAction(CAROUSEL_GO_BACK);
export const carouselGoForward = createAction(CAROUSEL_GO_FORWARD);
