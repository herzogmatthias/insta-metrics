export const CHANGE_TAB = "CHANGE_TAB";

export interface UserDetailsState {
  tab: number;
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
}
