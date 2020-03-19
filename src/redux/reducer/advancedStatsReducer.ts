import { AdvancedStatsState } from "../types/advancedStatsTypes";
import { createReducer } from "@reduxjs/toolkit";

const initialState: AdvancedStatsState = {
  likesData: [
    { data: 11277, name: "February 17, 2009" },
    { data: 146587, name: "February 17, 2009" },
    { data: 173160, name: "February 17, 2009" },
    { data: 193160, name: "February 17, 2009" },
    { data: 163160, name: "February 17, 2009" },
    { data: 204865, name: "February 17, 2009" }
  ],
  commentsData: [
    { data: 12731, name: "February 17, 2009" },
    { data: 45987, name: "February 17, 2009" },
    { data: 23645, name: "February 17, 2009" },
    { data: 65412, name: "February 17, 2009" },
    { data: 16547, name: "February 17, 2009" },
    { data: 25863, name: "February 17, 2009" }
  ],
  engagementRateData: [
    { data: 2.1, name: "February 17, 2009" },
    { data: 4.5, name: "February 17, 2009" },
    { data: 3.24, name: "February 17, 2009" },
    { data: 1.23, name: "February 17, 2009" },
    { data: 5, name: "February 17, 2009" },
    { data: 3, name: "February 17, 2009" }
  ]
};

export const advancedStatsReducer = createReducer(initialState, {});
