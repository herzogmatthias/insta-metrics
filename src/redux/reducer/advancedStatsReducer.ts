import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  AdvancedStatsState,
  ImagePreview,
  SortByOption,
} from "../types/advancedStatsTypes";
import {
  selectImage,
  changeOnlyMultiviewsFilter,
  changeOnlyVideosFilter,
  changeFromFilter,
  changeToFilter,
  filterImages,
  changeSorting,
} from "../actions/advancedStatsAction";

const initialState: AdvancedStatsState = {
  sortingOptions: [
    {
      id: 1,
      name: "Date",
      value: false,
      increase: true,
    },
    {
      id: 2,
      name: "Date",
      value: true,
      increase: false,
    },
    {
      id: 3,
      name: "Likes",
      value: false,
      increase: true,
    },
    {
      id: 4,
      name: "Likes",
      value: false,
      increase: false,
    },
    {
      id: 5,
      name: "Comments",
      value: false,
      increase: true,
    },
    {
      id: 6,
      name: "Comments",
      value: false,
      increase: false,
    },
  ],
  images: [
    {
      id: "1",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1584898131,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: true,
      multipleViews: true,
    },
    {
      id: "2",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1584898131,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: true,
      multipleViews: false,
    },
    {
      id: "3",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1585008709,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: false,
      multipleViews: false,
    },
    {
      id: "4",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1584041349,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: false,
      multipleViews: false,
    },
    {
      id: "5",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1583867229,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: false,
      multipleViews: false,
    },
    {
      id: "6",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1583777103,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: true,
      multipleViews: false,
    },
    {
      id: "7",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1583777103,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: false,
      multipleViews: true,
    },
    {
      id: "8",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1583777103,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: true,
      multipleViews: true,
    },
  ],
  selectedImage: undefined,
  filterOptions: {
    onlyMultiViews: false,
    onlyVideos: false,
    fromDate: null,
    toDate: null,
  },
  filteredImages: [
    {
      id: "1",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1584898131,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: true,
      multipleViews: true,
    },
    {
      id: "2",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1584898131,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: true,
      multipleViews: false,
    },
    {
      id: "3",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1585008709,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: false,
      multipleViews: false,
    },
    {
      id: "4",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1584041349,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: false,
      multipleViews: false,
    },
    {
      id: "5",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1583867229,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: false,
      multipleViews: false,
    },
    {
      id: "6",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1583777103,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: true,
      multipleViews: false,
    },
    {
      id: "7",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1583777103,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: false,
      multipleViews: true,
    },
    {
      id: "8",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      timeStamp: 1583777103,
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: true,
      multipleViews: true,
    },
  ],
};

export const advancedStatsReducer = createReducer(initialState, {
  [selectImage.type]: (
    state,
    action: PayloadAction<ImagePreview | undefined>
  ) => {
    state.selectedImage = action.payload;
  },
  [changeOnlyMultiviewsFilter.type]: (
    state,
    action: PayloadAction<boolean>
  ) => {
    state.filterOptions.onlyMultiViews = action.payload;
  },
  [changeOnlyVideosFilter.type]: (state, action: PayloadAction<boolean>) => {
    state.filterOptions.onlyVideos = action.payload;
  },
  [changeFromFilter.type]: (state, action: PayloadAction<Date | null>) => {
    state.filterOptions.fromDate = action.payload;
  },
  [changeToFilter.type]: (state, action: PayloadAction<Date | null>) => {
    state.filterOptions.toDate = action.payload;
  },
  [filterImages.type]: (state, action) => {
    let copyImages = state.images;
    if (state.filterOptions.onlyMultiViews) {
      copyImages = copyImages.filter((image) =>
        image.multipleViews ? image : null
      );
    }
    if (state.filterOptions.onlyVideos) {
      copyImages = copyImages.filter((image) => (image.isVideo ? image : null));
    }
    if (state.filterOptions.fromDate != null) {
      copyImages = copyImages.filter((image) =>
        image.timeStamp * 1000 >= state.filterOptions.fromDate!.getTime()
          ? image
          : null
      );
    }
    if (state.filterOptions.toDate != null) {
      copyImages = copyImages.filter((image) =>
        image.timeStamp * 1000 <= state.filterOptions.toDate!.getTime()
          ? image
          : null
      );
    }
    state.filteredImages = copyImages;
  },
  [changeSorting.type]: (state, action: PayloadAction<SortByOption>) => {
    state.sortingOptions.find(
      (sortingOption) => sortingOption.value
    )!.value = false;
    state.sortingOptions.find(
      (sortingOption) => sortingOption.id === action.payload.id
    )!.value = true;

    state.filteredImages.sort((a, b) => {
      if (action.payload.name === "Date") {
        return action.payload.increase
          ? a.timeStamp - b.timeStamp
          : b.timeStamp - a.timeStamp;
      }
      if (action.payload.name === "Likes") {
        return action.payload.increase ? a.likes - b.likes : b.likes - a.likes;
      } else {
        return action.payload.increase
          ? a.comments - b.comments
          : b.comments - a.comments;
      }
    });
  },
});
