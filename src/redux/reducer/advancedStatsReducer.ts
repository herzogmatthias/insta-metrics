import { AdvancedStatsState } from "../types/advancedStatsTypes";
import { createReducer } from "@reduxjs/toolkit";

const initialState: AdvancedStatsState = {
  likesData: [
    { data: 11277, name: "1" },
    { data: 146587, name: "2" },
    { data: 173160, name: "3" },
    { data: 193160, name: "4" },
    { data: 163160, name: "5" },
    { data: 204865, name: "6" }
  ],
  commentsData: [
    { data: 12731, name: "1" },
    { data: 45987, name: "1" },
    { data: 23645, name: "1" },
    { data: 65412, name: "1" },
    { data: 16547, name: "1" },
    { data: 25863, name: "1" }
  ],
  engagementRateData: [
    { data: 2.1, name: "1" },
    { data: 4.5, name: "1" },
    { data: 3.24, name: "1" },
    { data: 1.23, name: "1" },
    { data: 5, name: "1" },
    { data: 3, name: "1" }
  ]
};

export const advancedStatsReducer = createReducer(initialState, {});
