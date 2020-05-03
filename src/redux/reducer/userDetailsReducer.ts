import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  changeTab,
  changeChart,
  fetchTags,
  fetchGeneralInformation,
  fetchGraphData,
  reinitState,
} from "../actions/userDetailsAction";
import {
  IUserDetailsState,
  ITag,
  IBasicTabStats,
  ICarouselWrapper,
} from "../types/userDetailsTypes";

const initialState: IUserDetailsState = {
  carouselData: [],
  tab: 0,
  selectedChart: 0,
  basicStats: undefined,
  tags: [],
  dataLoaded: false,
  graphLoaded: false,
  tagsLoaded: false,
};

export const userDetailsReducer = createReducer(initialState, {
  [changeTab.type]: (state, action: PayloadAction<number>) => {
    state.tab = action.payload;
  },
  [changeChart.type]: (state, action: PayloadAction<number>) => {
    state.selectedChart = action.payload;
  },
  [fetchTags.type]: (state, action: PayloadAction<ITag[]>) => {
    state.tags = action.payload;
    state.tagsLoaded = true;
  },
  [fetchGeneralInformation.type]: (
    state,
    action: PayloadAction<IBasicTabStats>
  ) => {
    state.basicStats = action.payload;
    state.dataLoaded = true;
  },
  [fetchGraphData.type]: (state, action: PayloadAction<ICarouselWrapper[]>) => {
    state.carouselData = action.payload;
    state.graphLoaded = true;
  },
  [reinitState.type]: (state, action) => {
    return initialState;
  },
});
