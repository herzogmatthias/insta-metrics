import { createAction } from "@reduxjs/toolkit";
import {
  SELECT_IMAGE,
  CHANGE_ONLY_VIDEOS_FILTER,
  CHANGE_ONLY_MULTIVIEWS_FILTER,
  CHANGE_FROM_FILTER,
  CHANGE_TO_FILTER,
  FILTER_IMAGES,
  SortByOption,
  CHANGE_SORTING,
  HANDLE_MODAL_OPEN,
  HANDLE_MODAL_CLOSE,
  FETCH_IMAGES,
  ImagePreview,
  FETCH_DETAILS_FOR_IMAGE,
  ImageDetails,
  FETCH_RANKINGS_FOR_IMAGE,
  Ranking,
  REINIT_ADVANCED_STATE,
} from "../types/advancedStatsTypes";
import { withPayloadType } from "./genericActionPayloadType";
import Axios from "axios";
import { URI } from "../config";
import { FETCH_GRAPH_DATA } from "../types/userDetailsTypes";

export const selectImage = createAction(
  SELECT_IMAGE,
  withPayloadType<string | undefined>()
);
export const changeOnlyVideosFilter = createAction(
  CHANGE_ONLY_VIDEOS_FILTER,
  withPayloadType<boolean>()
);
export const changeOnlyMultiviewsFilter = createAction(
  CHANGE_ONLY_MULTIVIEWS_FILTER,
  withPayloadType<boolean>()
);
export const changeFromFilter = createAction(
  CHANGE_FROM_FILTER,
  withPayloadType<Date | null>()
);
export const changeToFilter = createAction(
  CHANGE_TO_FILTER,
  withPayloadType<Date | null>()
);
export const filterImages = createAction(FILTER_IMAGES);
export const changeSorting = createAction(
  CHANGE_SORTING,
  withPayloadType<SortByOption>()
);
export const handleModalOpen = createAction(HANDLE_MODAL_OPEN);
export const handleModalClose = createAction(HANDLE_MODAL_CLOSE);
export const reinitAdvancedState = createAction(REINIT_ADVANCED_STATE);
export const fetchRankingsForImage = createAction(
  FETCH_RANKINGS_FOR_IMAGE,
  withPayloadType<Ranking[]>()
);
export const fetchDetailsForImage = createAction(
  FETCH_DETAILS_FOR_IMAGE,
  withPayloadType<ImageDetails>()
);
export const fetchImages = createAction(
  FETCH_IMAGES,
  withPayloadType<ImagePreview[]>()
);

export function getImages(username: string) {
  return (dispatch: any) => {
    Axios.get(`${URI}post/last-fifty-pictures/${username}`).then((result) => {
      dispatch({ type: FETCH_IMAGES, payload: result.data });
    });
  };
}

export function getImageDetails(shortcode: string) {
  return (dispatch: any) => {
    Axios.get(`${URI}post/details-for-pictures/${shortcode}`).then((result) => {
      dispatch({ type: FETCH_DETAILS_FOR_IMAGE, payload: result.data });
    });
  };
}
export function getRankingForImage(shortcode: string) {
  return (dispatch: any) => {
    Axios.get(`${URI}post/rankings-for-picture/${shortcode}`).then((result) => {
      dispatch({ type: FETCH_RANKINGS_FOR_IMAGE, payload: result.data });
    });
  };
}
