import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  selectImage,
  changeOnlyMultiviewsFilter,
  changeOnlyVideosFilter,
  changeFromFilter,
  changeToFilter,
  filterImages,
  changeSorting,
  handleModalOpen,
  handleModalClose,
  fetchImages,
  fetchDetailsForImage,
  fetchRankingsForImage,
  reinitAdvancedState,
} from "../actions/advancedStatsAction";
import {
  IAdvancedStatsState,
  IImagePreview,
  IImageDetails,
  IRanking,
  ISortByOption,
} from "../types/advancedStatsTypes";

const initialState: IAdvancedStatsState = {
  imagesLoaded: false,
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
  images: [],
  selectedImage: undefined,
  rankings: [],
  filterOptions: {
    onlyMultiViews: false,
    onlyVideos: false,
    fromDate: null,
    toDate: null,
  },
  filteredImages: [],
  modalOpen: false,
  imageDetailsLoaded: false,
  rankingsLoaded: false,
  selectedImageDetails: undefined,
};

export const advancedStatsReducer = createReducer(initialState, {
  [selectImage.type]: (state, action: PayloadAction<string | undefined>) => {
    state.imageDetailsLoaded = false;
    state.rankingsLoaded = false;
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
  [changeSorting.type]: (state, action: PayloadAction<ISortByOption>) => {
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
  [handleModalOpen.type]: (state, action) => {
    state.modalOpen = true;
  },
  [handleModalClose.type]: (state, action) => {
    state.modalOpen = false;
    state.selectedImage = undefined;
  },
  [fetchImages.type]: (state, action: PayloadAction<IImagePreview[]>) => {
    state.images = action.payload;
    state.filteredImages = action.payload;
    state.imagesLoaded = true;
  },
  [fetchDetailsForImage.type]: (
    state,
    action: PayloadAction<IImageDetails>
  ) => {
    state.selectedImageDetails = action.payload;
    state.imageDetailsLoaded = true;
  },
  [fetchRankingsForImage.type]: (state, action: PayloadAction<IRanking[]>) => {
    state.rankings = action.payload;
    state.rankingsLoaded = true;
  },
  [reinitAdvancedState.type]: (state, action) => {
    return initialState;
  },
});
