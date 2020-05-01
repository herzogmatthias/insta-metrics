import {
  UserDetailsState,
  Tag,
  BasicTabStats,
  CarouselWrapper,
} from "../types/userDetailsTypes";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  changeTab,
  changeChart,
  fetchTags,
  fetchGeneralInformation,
  fetchGraphData,
} from "../actions/userDetailsAction";

const initialState: UserDetailsState = {
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
  [fetchTags.type]: (state, action: PayloadAction<Tag[]>) => {
    state.tags = action.payload;
    state.tagsLoaded = true;
  },
  [fetchGeneralInformation.type]: (
    state,
    action: PayloadAction<BasicTabStats>
  ) => {
    state.basicStats = action.payload;
    state.dataLoaded = true;
  },
  [fetchGraphData.type]: (state, action: PayloadAction<CarouselWrapper[]>) => {
    state.carouselData = action.payload;
    state.graphLoaded = true;
  },
});
