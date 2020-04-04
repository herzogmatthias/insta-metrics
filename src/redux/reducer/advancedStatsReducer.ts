import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { AdvancedStatsState, ImagePreview } from "../types/advancedStatsTypes";
import { selectImage } from "../actions/advancedStatsAction";

const initialState: AdvancedStatsState = {
  images: [
    {
      id: "1",
      author: "kyliejenner",
      comments: 71328,
      likes: 5601167,
      caption: "bored in the house and i’m in the house bored",
      date: "February 17, 2009",
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
      date: "February 17, 2009",
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
      date: "February 17, 2009",
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
      date: "February 17, 2009",
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
      date: "February 17, 2009",
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
      date: "February 17, 2009",
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
      date: "February 17, 2009",
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
      date: "February 17, 2009",
      avatarUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=fwDZR7AUhRsAX_vqDCS&oh=6ff2857113677ac544ff4890541e3e1b&oe=5EAC290B",
      imageUrl:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/91013208_612578579597706_6929893541087987297_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=5VvzDwNxHlYAX9cvrCp&oh=d8f08af749648a0e0e2e4ebfda5bc452&oe=5EAD33C7",
      isVideo: true,
      multipleViews: true,
    },
  ],
  selectedImage: undefined,
};

export const advancedStatsReducer = createReducer(initialState, {
  [selectImage.type]: (
    state,
    action: PayloadAction<ImagePreview | undefined>
  ) => {
    state.selectedImage = action.payload;
  },
});
