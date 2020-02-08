export const FETCH_BASIC_INFORMATION = 'FETCH_BASIC_INFORMATION'

export interface BasicUserInformation {
    username: string;
    name: string;
    avatar: string;
}

export interface SidebarState {
    users: BasicUserInformation[],
    loaded: boolean,
}