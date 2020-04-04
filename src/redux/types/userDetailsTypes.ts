export const CHANGE_TAB = "CHANGE_TAB";
export const CAROUSEL_GO_BACK = "CAROUSEL_GO_BACK";
export const CAROUSEL_GO_FORWARD = "CAROUSEL_GO_FORWARD";

export interface ChartData {
  data: number;
  name: string;
}

export interface CarouselWrapper {
  chart: ChartData[];
  header: string;
}

export interface UserDetailsState {
  tab: number;
  CarouselData: CarouselWrapper[];
  selectedChart: number;
  basicStats: BasicTabStats;
}

interface BasicTabStats {
  name: string;
  userName: string;
  avatar: string;
  follower: number;
  following: number;
  biography: string;
  posts: number;
  lastThreePosts: string[];
  isVerified: boolean;
  avgLikes: number;
  avgComments: number;
  avgEngagementRate: number;
  tags: string[];
  minPrice: number;
  maxPrice: number;
}
