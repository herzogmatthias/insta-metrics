export const SELECT_IMAGE = "SELECT_IMAGE";
export const CHANGE_ONLY_VIDEOS_FILTER = "CHANGE_ONLY_VIDEOS_FILTER";
export const CHANGE_ONLY_MULTIVIEWS_FILTER = "CHANGE_ONLY_MULTIVIEWS_FILTER";
export const CHANGE_FROM_FILTER = "CHANGE_FROM_FILTER";
export const CHANGE_TO_FILTER = "CHANGE_TO_FILTER";
export const FILTER_IMAGES = "FILTER_IMAGES";
export const CHANGE_SORTING = "CHANGE_SORTING";

export interface AdvancedStatsState {
  images: ImagePreview[];
  selectedImage: ImagePreview | undefined;
  filterOptions: FilterOptions;
  filteredImages: ImagePreview[];
  sortingOptions: SortByOption[];
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
