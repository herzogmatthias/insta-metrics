import { SidebarState } from "../types/sidebarTypes";
import { createReducer } from "@reduxjs/toolkit";
import { fetchBasicInformation } from "../actions/sidebarActions";

const initialState : SidebarState = {
 users: [],
 loaded: false,   
}

export const sidebarReducer = createReducer(initialState, {
    [fetchBasicInformation.type]: (state, action) => { state.loaded = true; state.users = action.payload}})