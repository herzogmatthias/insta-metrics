import { createAction } from "@reduxjs/toolkit";
import {
  CLOSE_NEW_USER_MODAL,
  OPEN_NEW_USER_MODAL,
  NewUserActionTypes,
  CHANGE_USERNAME_INPUT,
  USERNAME_HAS_ERROR,
  AddUserError,
  USERNAME_HAS_NO_ERROR
} from "../types/newUserTypes";
import { withPayloadType } from "./genericActionPayloadType";
import Axios from "axios";
import { BasicUserInformation, USERNAME_IS_VALID } from "../types/sidebarTypes";
import { URI } from "../config";

export const closeNewUserModal = createAction(CLOSE_NEW_USER_MODAL);
export const openNewUserModal = createAction(OPEN_NEW_USER_MODAL);
export const changeUsernameInput = createAction(
  CHANGE_USERNAME_INPUT,
  withPayloadType<string>()
);
export const usernameHasError = createAction(
  USERNAME_HAS_ERROR,
  withPayloadType<AddUserError>()
);
export const usernameHasNoError = createAction(USERNAME_HAS_NO_ERROR);

export function addUser(username: string) {
  return (dispatch: any) => {
    Axios.get(URI + "new-user/" + username)
      .then(value => {
        dispatch({ type: USERNAME_HAS_NO_ERROR, payload: undefined });
        dispatch({
          type: USERNAME_IS_VALID,
          payload: value.data.basicInformation as BasicUserInformation
        });
      })
      .catch(error => {
        const usernameError: AddUserError = {
          error: error.response.data.error,
          text: error.response.data.text
        };
        dispatch({ type: USERNAME_HAS_ERROR, payload: usernameError });
      });
  };
}
