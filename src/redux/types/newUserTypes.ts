export const OPEN_NEW_USER_MODAL = "OPEN_NEW_USER_MODAL";
export const CLOSE_NEW_USER_MODAL = "CLOSE_NEW_USER_MODAL";
export const CHANGE_USERNAME_INPUT = "CHANGE_USERNAME_INPUT";
export const USERNAME_HAS_ERROR = "USERNAME_HAS_ERROR";
export const USERNAME_HAS_NO_ERROR = "USERNAME_HAS_NO_ERROR";
export const HANDLE_CHECK = "HANDLE_CHECK";
export const CHECK_USERNAME = "CHECK_USERNAME";

export interface newUserState {
  error: string;
  username: string;
  open: boolean;
  isBot: boolean;
  hasError: boolean;
  checkingUser: boolean;
}

interface openNewUserModal {
  type: typeof OPEN_NEW_USER_MODAL;
  payload: boolean;
}

interface closeNewUserModal {
  type: typeof CLOSE_NEW_USER_MODAL;
  payload: boolean;
}

export interface AddUserError {
  error: boolean;
  text: string;
}

export type NewUserActionTypes = openNewUserModal | closeNewUserModal;
