export const OPEN_NEW_USER_MODAL = "OPEN_NEW_USER_MODAL";
export const CLOSE_NEW_USER_MODAL = "CLOSE_NEW_USER_MODAL";
export const CHANGE_USERNAME_INPUT = "CHANGE_USERNAME_INPUT";

export interface newUserState {
  error: string;
  username: string;
  open: boolean;
  hasError: boolean;
}

interface openNewUserModal {
  type: typeof OPEN_NEW_USER_MODAL;
  payload: boolean;
}

interface closeNewUserModal {
  type: typeof CLOSE_NEW_USER_MODAL;
  payload: boolean;
}

export type NewUserActionTypes = openNewUserModal | closeNewUserModal;
