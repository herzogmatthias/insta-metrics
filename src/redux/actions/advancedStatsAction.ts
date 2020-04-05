import { createAction } from "@reduxjs/toolkit";
import {
  SELECT_IMAGE,
  ImagePreview,
  CHANGE_ONLY_VIDEOS_FILTER,
  CHANGE_ONLY_MULTIVIEWS_FILTER,
  CHANGE_FROM_FILTER,
  CHANGE_TO_FILTER,
  FILTER_IMAGES,
  SortByOption,
  CHANGE_SORTING,
} from "../types/advancedStatsTypes";
import { withPayloadType } from "./genericActionPayloadType";

export const selectImage = createAction(
  SELECT_IMAGE,
  withPayloadType<ImagePreview | undefined>()
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
