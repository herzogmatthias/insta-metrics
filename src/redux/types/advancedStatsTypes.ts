import { IBasicUserInformation } from "./sidebarTypes";

export const SELECT_IMAGE = "SELECT_IMAGE";
export const CHANGE_ONLY_VIDEOS_FILTER = "CHANGE_ONLY_VIDEOS_FILTER";
export const CHANGE_ONLY_MULTIVIEWS_FILTER = "CHANGE_ONLY_MULTIVIEWS_FILTER";
export const CHANGE_FROM_FILTER = "CHANGE_FROM_FILTER";
export const CHANGE_TO_FILTER = "CHANGE_TO_FILTER";
export const FILTER_IMAGES = "FILTER_IMAGES";
export const CHANGE_SORTING = "CHANGE_SORTING";
export const HANDLE_MODAL_OPEN = "HANDLE_MODAL_OPEN";
export const HANDLE_MODAL_CLOSE = "HANDLE_MODAL_CLOSE";
export const FETCH_IMAGES = "FETCH_IMAGES";
export const FETCH_DETAILS_FOR_IMAGE = "FETCH_DETAILS_FOR_IMAGE";
export const FETCH_RANKINGS_FOR_IMAGE = "FETCH_RANKINGS_FOR_IMAGE";
export const REINIT_ADVANCED_STATE = "REINIT_ADVANCED_STATE";

export interface IAdvancedStatsState {
  images: IImagePreview[];
  selectedImage: string | undefined;
  filterOptions: FilterOptions;
  filteredImages: IImagePreview[];
  sortingOptions: ISortByOption[];
  rankings: IRanking[];
  modalOpen: boolean;
  imageDetailsLoaded: boolean;
  imagesLoaded: boolean;
  rankingsLoaded: boolean;
  selectedImageDetails: IImageDetails | undefined;
}

export interface FilterOptions {
  onlyVideos: boolean;
  onlyMultiViews: boolean;
  fromDate: Date | null;
  toDate: Date | null;
}

export interface ISortByOption {
  id: number;
  name: string;
  value: boolean;
  increase: boolean;
}
export interface IHashTag {
  name: string;
  posts: number;
}
export interface IImageDetails {
  owner: IBasicUserInformation;
  id: string;
  hashTags: IHashTag[];
  timeStamp: number;
  likes: number;
  comments: number;
  caption: string;
  previewComments: IComment[];
  images: IImage[];
  er: number;
}

export interface IComment {
  timeStamp: number;
  owner: IBasicUserInformation;
  text: string;
  likes: number;
}
export interface IRanking {
  type: string;
  percentage: number;
  rank: number;
}
export interface IImage {
  isVideo: boolean;
  display_url: string;
  tagged_users: IBasicUserInformation[];
}
export interface IImagePreview {
  id: string;
  likes: number;
  comments: number;
  caption: string;
  timeStamp: number;
  imageUrl: string;
  avatarUrl: string;
  author: string;
  isVideo: boolean;
  multipleViews: boolean;
}
