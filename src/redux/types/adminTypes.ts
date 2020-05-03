export const REINIT_ADMIN_STATE = "REINIT_ADMIN_STATE";
export const FETCH_STATUS = "FETCH_STATUS";
export const FETCH_LOGS = "FETCH_LOGS";
export const FETCH_DMS = "FETCH_DMS";
export const FETCH_OPTIONS = "FETCH_OPTIONS";
export const RESTORE_ORIGINAL_SUBREDDITS = "RESTORE_ORIGINAL_SUBREDDITS";
export const RESTORE_ORIGINAL_SCHEDULE = "RESTORE_ORIGINAL_SCHEDULE";
export const NEW_SUBREDDITS = "NEW_SUBREDDITS";
export const NEW_SCHEDULE = "NEW_SCHEDULE";
export const ON_CHANGE_SUBREDDITS = "ON_CHANGE_SUBREDDITS";
export const ON_CHANGE_SCHEDULE = "ON_CHANGE_SCHEDULE";
export const LOADING_LOGS = "LOADING_LOGS";
export const LOADING_DMS = "LOADING_DMS";

export interface IStatus {
  status: string;
  monit: IMonit;
  env: IEnv;
}

export interface IMonit {
  memory: number;
  cpu: number;
}

export interface IEnv {
  uptime: number;
  instances: number;
}

export interface IAdminState {
  status: IStatus | undefined;
  name: string;
  schedule: string;
  subreddits: string[];
  logs: string;
  dms: IDM[];
  explore: boolean;
  hashtags: string[];
  logsLoaded: boolean;
  dmsLoaded: boolean;
  settingsLoaded: boolean;
  statusLoaded: boolean;
  pm2Name: string;
  originalSchedule: string;
  originalSubreddits: string[];
}
export interface IOptions {
  schedule: string;
  subredditNames: string[];
  explore: boolean;
  tags: string[];
  igName: string;
  name: string;
}
export interface IMapNameIGName {
  name: string;
  igUsername: string;
}
export interface IDM {
  avatarUrl: string;
  username: string;
  lastMessage: string;
  dateFormatted: string;
  date: string;
}
