export interface AdvancedStatsState {
  likesData: ChartData[];
  commentsData: ChartData[];
  engagementRateData: ChartData[];
}

export interface ChartData {
  data: number;
  name: string;
}
