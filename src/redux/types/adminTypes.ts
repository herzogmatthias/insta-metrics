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
  status: IStatus;
  name: string;
  schedule: string;
  subreddits: string[];
  logs: string;
  dms: IDM[];
  explore: boolean;
  hashtags: string[];
  logsLoaded: boolean;
  dmsLoaded: boolean;
}

export interface IDM {
  avatarUrl: string;
  username: string;
  lastMessage: string;
  dateFormatted: string;
  date: string;
}
