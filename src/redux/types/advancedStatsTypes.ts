export interface AdvancedStatsState {
  likesData: ChartData[];
  commentsData: ChartData[];
  engagementRateData: ChartData[];
  embedHtml: string;
}

export interface ChartData {
  data: number;
  name: string;
}
