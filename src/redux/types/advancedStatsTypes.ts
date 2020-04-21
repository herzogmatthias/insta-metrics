import { BasicUserInformation } from "./sidebarTypes";

export const SELECT_IMAGE = "SELECT_IMAGE";
export const CHANGE_ONLY_VIDEOS_FILTER = "CHANGE_ONLY_VIDEOS_FILTER";
export const CHANGE_ONLY_MULTIVIEWS_FILTER = "CHANGE_ONLY_MULTIVIEWS_FILTER";
export const CHANGE_FROM_FILTER = "CHANGE_FROM_FILTER";
export const CHANGE_TO_FILTER = "CHANGE_TO_FILTER";
export const FILTER_IMAGES = "FILTER_IMAGES";
export const CHANGE_SORTING = "CHANGE_SORTING";
export const HANDLE_MODAL_OPEN = "HANDLE_MODAL_OPEN";
export const HANDLE_MODAL_CLOSE = "HANDLE_MODAL_CLOSE";

export interface AdvancedStatsState {
  images: ImagePreview[];
  selectedImage: string | undefined;
  filterOptions: FilterOptions;
  filteredImages: ImagePreview[];
  sortingOptions: SortByOption[];
  modalOpen: boolean;
  imagesLoaded: boolean;
  selectedImageDetails: ImageDetails;
}

export interface FilterOptions {
  onlyVideos: boolean;
  onlyMultiViews: boolean;
  fromDate: Date | null;
  toDate: Date | null;
}

export interface SortByOption {
  id: number;
  name: string;
  value: boolean;
  increase: boolean;
}
export interface HashTag {
  name: string;
  posts: number;
}
export interface ImageDetails {
  owner: BasicUserInformation;
  id: string;
  hashTags: HashTag[];
  timeStamp: number;
  likes: number;
  comments: number;
  caption: string;
  previewComments: Comment[];
  rankings: Ranking[];
  images: Image[];
}

export interface Comment {
  timeStamp: number;
  owner: BasicUserInformation;
  text: string;
  likes: number;
}
export interface Ranking {
  type: string;
  percentage: number;
  rank: number;
}
export interface Image {
  isVideo: boolean;
  display_url: string;
  tagged_users: BasicUserInformation[];
}
export interface ImagePreview {
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
