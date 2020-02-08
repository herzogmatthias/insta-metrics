import { createAction } from "@reduxjs/toolkit";
import {
  CLOSE_NEW_USER_MODAL,
  OPEN_NEW_USER_MODAL,
  NewUserActionTypes,
  CHANGE_USERNAME_INPUT
} from "../types/newUserTypes";
import { withPayloadType } from "./genericActionPayloadType";

export const close_new_user_modal = createAction(CLOSE_NEW_USER_MODAL);
export const open_new_user_modal = createAction(OPEN_NEW_USER_MODAL);
export const change_username_input = createAction(
  CHANGE_USERNAME_INPUT,
  withPayloadType<string>()
);
