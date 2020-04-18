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
}
