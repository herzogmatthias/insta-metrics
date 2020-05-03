export const FETCH_BASIC_INFORMATION = "FETCH_BASIC_INFORMATION";
export const USERNAME_IS_VALID = "USERNAME_IS_VALID";
export const SELECT_USER = "SELECT_USER";
export const DELETE_USER = "DELETE_USER";

export interface IBasicUserInformation {
  username: string;
  name: string;
  avatar: string;
  isBot: boolean;
}

export interface ISidebarState {
  users: IBasicUserInformation[];
  loaded: boolean;
  selectedUser: IBasicUserInformation | undefined;
}
