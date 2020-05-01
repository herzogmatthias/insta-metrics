export const CHANGE_TAB = "CHANGE_TAB";
export const CHANGE_CHART = "CHANGE_CHART";
export const FETCH_TAGS = "FETCH_TAGS";
export const FETCH_GENERAL_INFORMATION = "FETCH_GENERAL_INFORMATION";
export const FETCH_GRAPH_DATA = "FETCH_GRAPH_DATA";

export interface ChartData {
  data: number;
  name: number;
}

export interface CarouselWrapper {
  chart: ChartData[];
  header: string;
}

export interface UserDetailsState {
  tab: number;
  carouselData: CarouselWrapper[];
  selectedChart: number;
  basicStats: BasicTabStats | undefined;
  tags: Tag[];
  graphLoaded: boolean;
  dataLoaded: boolean;
  tagsLoaded: boolean;
}
export interface Tag {
  confidence: number;
  tag: { en: string };
}

export interface BasicTabStats {
  name: string;
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
