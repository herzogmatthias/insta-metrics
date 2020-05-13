import {
  REINIT_ADMIN_STATE,
  FETCH_STATUS,
  IStatus,
  IMapNameIGName,
  FETCH_LOGS,
  IDM,
  FETCH_DMS,
  FETCH_OPTIONS,
  IOptions,
  RESTORE_ORIGINAL_SUBREDDITS,
  RESTORE_ORIGINAL_SCHEDULE,
  NEW_SUBREDDITS,
  NEW_SCHEDULE,
  ON_CHANGE_SUBREDDITS,
  ON_CHANGE_SCHEDULE,
  LOADING_DMS,
  LOADING_LOGS,
} from "../types/adminTypes";
import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "./genericActionPayloadType";
import Axios from "axios";
import { REPOST_URI } from "../config";

export const reinitAdminState = createAction(REINIT_ADMIN_STATE);
export const restoreOrginalSubreddits = createAction(
  RESTORE_ORIGINAL_SUBREDDITS
);
export const restoreOriginalSchedule = createAction(RESTORE_ORIGINAL_SCHEDULE);
export const loadingDms = createAction(LOADING_DMS);
export const newSubreddits = createAction(NEW_SUBREDDITS);
export const newSchedule = createAction(NEW_SCHEDULE);
export const loadingLogs = createAction(LOADING_LOGS);
export const fetchStatus = createAction(
  FETCH_STATUS,
  withPayloadType<IStatus>()
);
export const fetchDMs = createAction(FETCH_DMS, withPayloadType<IDM[]>());
export const fetchOptions = createAction(
  FETCH_OPTIONS,
  withPayloadType<IOptions>()
);
export const fetchLogs = createAction(FETCH_LOGS, withPayloadType<string>());
export const onChangeSubreddits = createAction(
  ON_CHANGE_SUBREDDITS,
  withPayloadType<string>()
);
export const onChangeSchedule = createAction(
  ON_CHANGE_SCHEDULE,
  withPayloadType<string>()
);
export function getStatus(name: string, dispatch: any) {
  Axios.get(`${REPOST_URI}status/${name}`).then((val) => {
    dispatch({ type: FETCH_STATUS, payload: val.data });
  });
}

export function getAllNames(igName: string) {
  return (dispatch: any) => {
    Axios.get(REPOST_URI + "bot").then((val) => {
      const data: IMapNameIGName[] = val.data;
      getStatus(data.find((bot) => bot.igUsername === igName)!.name, dispatch);
      getLogs(data.find((bot) => bot.igUsername === igName)!.name, dispatch);
      getDms(data.find((bot) => bot.igUsername === igName)!.name, dispatch);
      getOptions(data.find((bot) => bot.igUsername === igName)!.name, dispatch);
    });
  };
}
export function getLogs(name: string, dispatch: any) {
  Axios.get(`${REPOST_URI}logs/${name}`).then((val) => {
    dispatch({ type: FETCH_LOGS, payload: val.data });
  });
}
export function getOptions(name: string, dispatch: any) {
  Axios.get(`${REPOST_URI}bot/${name}/options`).then((val) => {
    dispatch({ type: FETCH_OPTIONS, payload: val.data });
  });
}
export function fetchStatusJob(igName: string) {
  return (dispatch: any) => {
    Axios.get(REPOST_URI + "bot").then((val) => {
      const data: IMapNameIGName[] = val.data;
      getStatus(data.find((bot) => bot.igUsername === igName)!.name, dispatch);
    });
  };
}
export function reloadLogsJob(igName: string) {
  return (dispatch: any) => {
    dispatch({ type: LOADING_LOGS, payload: undefined });
    Axios.get(REPOST_URI + "bot").then((val) => {
      const data: IMapNameIGName[] = val.data;
      getLogs(data.find((bot) => bot.igUsername === igName)!.name, dispatch);
    });
  };
}
export function reloadDMsJob(igName: string) {
  return (dispatch: any) => {
    dispatch({ type: LOADING_DMS, payload: undefined });
    Axios.get(REPOST_URI + "bot").then((val) => {
      const data: IMapNameIGName[] = val.data;
      getDms(data.find((bot) => bot.igUsername === igName)!.name, dispatch);
    });
  };
}
export function getDms(name: string, dispatch: any) {
  Axios.get(`${REPOST_URI}bot/${name}/chat`).then((val) => {
    dispatch({ type: FETCH_DMS, payload: val.data });
  });
}

export function postNewSubreddits(name: string, subreddits: string) {
  return (dispatch: any) => {
    dispatch({ type: NEW_SUBREDDITS, payload: undefined });
    Axios.post(`${REPOST_URI}api/bot/${name}/subreddit`, subreddits.split(","));
  };
}
export function postNewSchedule(name: string, schedule: string) {
  return (dispatch: any) => {
    dispatch({ type: NEW_SCHEDULE, payload: undefined });
    Axios.post(`${REPOST_URI}api/bot/${name}/schedule`, {
      newSchedule: schedule,
    });
  };
}
export function restartBot(name: string) {
  return (dispatch: any) => {
    Axios.post(`${REPOST_URI}api/bot/${name}/schedule`, {
      action: "Restart",
    });
  };
}
export function stopBot(name: string) {
  return (dispatch: any) => {
    Axios.post(`${REPOST_URI}api/bot/${name}/pm2`, {
      action: "Stop",
    });
  };
}
export function deleteBot(name: string) {
  return (dispatch: any) => {
    Axios.post(`${REPOST_URI}api/bot/${name}/schedule`, {
      action: "Delete",
    });
  };
}
