import { createAction } from "@reduxjs/toolkit";
import {
  CHANGE_TAB,
  CHANGE_CHART,
  ITag,
  FETCH_TAGS,
  IBasicTabStats,
  FETCH_GENERAL_INFORMATION,
  ICarouselWrapper,
  FETCH_GRAPH_DATA,
  REINIT_STATE,
} from "../types/userDetailsTypes";
import { withPayloadType } from "./genericActionPayloadType";
import Axios from "axios";
import { URI } from "../config";
import { TagService } from "../../services/TagsService";

export const changeTab = createAction(CHANGE_TAB, withPayloadType<number>());
export const changeChart = createAction(
  CHANGE_CHART,
  withPayloadType<number>()
);
export const fetchTags = createAction(FETCH_TAGS, withPayloadType<ITag[]>());
export const fetchGeneralInformation = createAction(
  FETCH_GENERAL_INFORMATION,
  withPayloadType<IBasicTabStats>()
);
export const fetchGraphData = createAction(
  FETCH_GRAPH_DATA,
  withPayloadType<ICarouselWrapper[]>()
);
export const reinitState = createAction(REINIT_STATE);

export function getTags(username: string) {
  return (dispatch: any) => {
    if (localStorage.hasOwnProperty(username)) {
      const tags = TagService.getTagsForUsername(username);
      dispatch({ type: FETCH_TAGS, payload: tags });
    } else {
      Axios.get(`${URI}user/tags/${username}`).then((result) => {
        TagService.setTagsForUsername(username, result.data);
        dispatch({ type: FETCH_TAGS, payload: result.data });
      });
    }
  };
}

export function getGeneralInformation(username: string) {
  return (dispatch: any) => {
    Axios.get(`${URI}user/general-information/${username}`).then((result) => {
      dispatch({ type: FETCH_GENERAL_INFORMATION, payload: result.data });
    });
  };
}

export function getGraphData(username: string) {
  return (dispatch: any) => {
    Axios.get(`${URI}user/graph-data/${username}`).then((result) => {
      dispatch({ type: FETCH_GRAPH_DATA, payload: result.data });
    });
  };
}
