import { createAction } from "@reduxjs/toolkit";
import { SELECT_IMAGE, ImagePreview } from "../types/advancedStatsTypes";
import { withPayloadType } from "./genericActionPayloadType";

export const selectImage = createAction(
  SELECT_IMAGE,
  withPayloadType<ImagePreview | undefined>()
);
