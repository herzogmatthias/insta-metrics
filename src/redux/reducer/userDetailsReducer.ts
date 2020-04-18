import { UserDetailsState } from "../types/userDetailsTypes";
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { changeTab, changeChart } from "../actions/userDetailsAction";

const initialState: UserDetailsState = {
  CarouselData: [
    {
      chart: [
        { data: 11277, name: "February 17, 2009" },
        { data: 146587, name: "February 17, 2009" },
        { data: 173160, name: "February 17, 2009" },
        { data: 193160, name: "February 17, 2009" },
        { data: 163160, name: "February 17, 2009" },
        { data: 204865, name: "February 17, 2009" },
      ],
      header: "Likes",
    },
    {
      chart: [
        { data: 12731, name: "February 17, 2009" },
        { data: 45987, name: "February 17, 2009" },
        { data: 23645, name: "February 17, 2009" },
        { data: 65412, name: "February 17, 2009" },
        { data: 16547, name: "February 17, 2009" },
        { data: 25863, name: "February 17, 2009" },
      ],
      header: "Comments",
    },
    {
      chart: [
        { data: 2.1, name: "February 17, 2009" },
        { data: 4.5, name: "February 17, 2009" },
        { data: 3.24, name: "February 17, 2009" },
        { data: 1.23, name: "February 17, 2009" },
        { data: 5, name: "February 17, 2009" },
        { data: 3, name: "February 17, 2009" },
      ],
      header: "Engagement Rate",
    },
  ],
  tab: 2,
  selectedChart: 0,
  basicStats: {
    name: "Kylie ",
    userName: "kyliejenner",
    avatar:
      "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s320x320/87340781_182299559853121_1572455116965937152_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=TOKCMtTyWa0AX_uPlQo&oh=9efbd5013eb3047e75d6fbda5b66275e&oe=5E873597",
    following: 139,
    follower: 164285473,
    biography: "@kyliecosmetics @kylieskin",
    posts: 6316,
    isVerified: true,
    avgLikes: 7918720,
    avgComments: 70140,
    avgEngagementRate: 4.87,
    tags: ["Model", "Women", "Kids", "Make-Up"],
    minPrice: 1091806.38,
    maxPrice: 1321660.36,
  },
};

export const userDetailsReducer = createReducer(initialState, {
  [changeTab.type]: (state, action: PayloadAction<number>) => {
    state.tab = action.payload;
  },
  [changeChart.type]: (state, action: PayloadAction<number>) => {
    state.selectedChart = action.payload;
  },
});
