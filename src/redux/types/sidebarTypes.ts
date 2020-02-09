export const FETCH_BASIC_INFORMATION = "FETCH_BASIC_INFORMATION";
export const USERNAME_IS_VALID = "USERNAME_IS_VALID";

export interface BasicUserInformation {
  username: string;
  name: string;
  avatar: string;
}

export interface SidebarState {
  users: BasicUserInformation[];
  loaded: boolean;
}