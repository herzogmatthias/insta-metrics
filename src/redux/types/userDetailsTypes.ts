export const CHANGE_TAB = "CHANGE_TAB";
export const CHANGE_CHART = "CHANGE_CHART";
export const FETCH_TAGS = "FETCH_TAGS";
export const FETCH_GENERAL_INFORMATION = "FETCH_GENERAL_INFORMATION";
export const FETCH_GRAPH_DATA = "FETCH_GRAPH_DATA";
export const REINIT_STATE = "REINIT_STATE";
export const CATCHED_ERROR = "CATCHED_ERROR";
export const RESTART = "RESTART";

export interface IChartData {
  data: number;
  name: number;
}

export interface ICarouselWrapper {
  chart: IChartData[];
  header: string;
}

export interface IUserDetailsState {
  tab: number;
  hasError: boolean;
  carouselData: ICarouselWrapper[];
  selectedChart: number;
  basicStats: IBasicTabStats | undefined;
  tags: ITag[];
  graphLoaded: boolean;
  dataLoaded: boolean;
  tagsLoaded: boolean;
}
export interface ITag {
  confidence: number;
  tag: { en: string };
}

export interface IBasicTabStats {
  name: string;
  isBot: boolean;
  userName: string;
  avatar: string;
  followers: number;
  following: number;
  description: string;
  posts: number;
  isVerified: boolean;
  avgLikes: number;
  avgComments: number;
  avgEngagementRate: number;
  avgPriceMin: number;
  avgPriceMax: number;
}
