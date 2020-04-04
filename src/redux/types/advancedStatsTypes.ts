export const SELECT_IMAGE = "SELECT_IMAGE";

export interface AdvancedStatsState {
  images: ImagePreview[];
  selectedImage: ImagePreview | undefined;
}

export interface ImagePreview {
  id: string;
  likes: number;
  comments: number;
  caption: string;
  date: string;
  imageUrl: string;
  avatarUrl: string;
  author: string;
  isVideo: boolean;
  multipleViews: boolean;
}
