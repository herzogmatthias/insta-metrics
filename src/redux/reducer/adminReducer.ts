import { IAdminState, IStatus, IDM, IOptions } from "../types/adminTypes";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  reinitAdminState,
  fetchStatus,
  fetchLogs,
  fetchDMs,
  fetchOptions,
  restoreOrginalSubreddits,
  restoreOriginalSchedule,
  newSubreddits,
  newSchedule,
  onChangeSchedule,
  onChangeSubreddits,
  loadingLogs,
  loadingDms,
} from "../actions/adminActions";

const initialState: IAdminState = {
  status: undefined,
  name: "",
  subreddits: [],
  hashtags: [],
  explore: true,
  logsLoaded: false,
  dmsLoaded: false,
  settingsLoaded: false,
  statusLoaded: false,
  originalSchedule: "",
  originalSubreddits: [],
  dms: [],
  schedule: "",
  logs: "",
  pm2Name: "",
};

export const adminReducer = createReducer(initialState, {
  [reinitAdminState.type]: (state, action) => {
    return initialState;
  },
  [fetchStatus.type]: (state, action: PayloadAction<IStatus>) => {
    state.status = action.payload;
    state.statusLoaded = true;
  },
  [fetchLogs.type]: (state, action: PayloadAction<string>) => {
    state.logs = action.payload;
    state.logsLoaded = true;
  },
  [fetchDMs.type]: (state, action: PayloadAction<IDM[]>) => {
    state.dms = action.payload;
    state.dmsLoaded = true;
  },
  [fetchOptions.type]: (state, action: PayloadAction<IOptions>) => {
    state.hashtags = action.payload.tags;
    state.explore = action.payload.explore;
    state.schedule = action.payload.schedule;
    state.subreddits = action.payload.subredditNames;
    state.originalSchedule = action.payload.schedule;
    state.originalSubreddits = action.payload.subredditNames;
    state.name = action.payload.igName;
    state.pm2Name = action.payload.name;
    state.settingsLoaded = true;
  },
  [loadingLogs.type]: (state, action) => {
    state.logsLoaded = false;
  },
  [loadingDms.type]: (state, action) => {
    state.dmsLoaded = false;
  },
  [restoreOrginalSubreddits.type]: (state, action) => {
    state.subreddits = state.originalSubreddits;
  },
  [restoreOriginalSchedule.type]: (state, action) => {
    state.schedule = state.originalSchedule;
  },
  [newSubreddits.type]: (state, action) => {
    state.originalSubreddits = state.subreddits;
  },
  [newSchedule.type]: (state, action) => {
    state.originalSchedule = state.schedule;
  },
  [onChangeSchedule.type]: (state, action: PayloadAction<string>) => {
    state.schedule = action.payload;
  },
  [onChangeSubreddits.type]: (state, action: PayloadAction<string>) => {
    state.subreddits = action.payload.split(",");
  },
});
