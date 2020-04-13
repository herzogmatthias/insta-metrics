import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { AdvancedStatsState, SortByOption } from "../types/advancedStatsTypes";
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
  modalOpen: true,
  selectedImageDetails: {
    rankings: [
      { type: "Comments", percentage: 65, rank: 10 },
      { type: "Likes", percentage: 78, rank: 5 },
    ],
    hashTags: [{ name: "#happybdayvic", posts: 16340 }],
    timeStamp: 1586239714,
    owner: {
      avatar:
        "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/88969499_231226268049340_341618078066409472_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=50VnRbd71_QAX_Iy_kp&oh=ad06bfd2f0a40ea7dae61e6c70ce6a2e&oe=5EB8068B",
      username: "kyliejenner",
      name: "Kylie 🤍",
    },
    id: "B9ZtrC9nHcL",
    likes: 5531452,
    comments: 13626,
    previewComments: [
      {
        text: "❤️",
        likes: 1,
        timeStamp: 1586239714,
        owner: {
          avatar:
            "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/92839363_239209004122482_7847278460975185920_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=jFxsks0Hfq4AX-R-D2N&oh=0f1f046c5f7dbe717d4ecda18b357e9f&oe=5EB93522",
          name: "",
          username: "akhilakhilesh67",
        },
      },
      {
        text: "❤️",
        likes: 1,
        timeStamp: 1586239714,
        owner: {
          avatar:
            "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/92839363_239209004122482_7847278460975185920_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=jFxsks0Hfq4AX-R-D2N&oh=0f1f046c5f7dbe717d4ecda18b357e9f&oe=5EB93522",
          name: "",
          username: "akhilakhilesh67",
        },
      },
      {
        text: "❤️",
        likes: 1,
        timeStamp: 1586239714,
        owner: {
          avatar:
            "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/92839363_239209004122482_7847278460975185920_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=jFxsks0Hfq4AX-R-D2N&oh=0f1f046c5f7dbe717d4ecda18b357e9f&oe=5EB93522",
          name: "",
          username: "akhilakhilesh67",
        },
      },
      {
        text: "❤️",
        likes: 1,
        timeStamp: 1586239714,
        owner: {
          avatar:
            "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/92839363_239209004122482_7847278460975185920_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=jFxsks0Hfq4AX-R-D2N&oh=0f1f046c5f7dbe717d4ecda18b357e9f&oe=5EB93522",
          name: "",
          username: "akhilakhilesh67",
        },
      },
      {
        text: "❤️",
        likes: 1,
        timeStamp: 1586239714,
        owner: {
          avatar:
            "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/92839363_239209004122482_7847278460975185920_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=jFxsks0Hfq4AX-R-D2N&oh=0f1f046c5f7dbe717d4ecda18b357e9f&oe=5EB93522",
          name: "",
          username: "akhilakhilesh67",
        },
      },
      {
        text: "❤️",
        likes: 1,
        timeStamp: 1586239714,
        owner: {
          avatar:
            "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/92839363_239209004122482_7847278460975185920_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=jFxsks0Hfq4AX-R-D2N&oh=0f1f046c5f7dbe717d4ecda18b357e9f&oe=5EB93522",
          name: "",
          username: "akhilakhilesh67",
        },
      },
      {
        text: "❤️",
        likes: 1,
        timeStamp: 1586239714,
        owner: {
          avatar:
            "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/92839363_239209004122482_7847278460975185920_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=jFxsks0Hfq4AX-R-D2N&oh=0f1f046c5f7dbe717d4ecda18b357e9f&oe=5EB93522",
          name: "",
          username: "akhilakhilesh67",
        },
      },
    ],
    caption: "howdy #happybdayvic",
    images: [
      {
        display_url:
          "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/88378944_244138456603733_3149386129266207514_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=Q6VWSj1PeBgAX-0airb&oh=c1036cb1b9180f65963aece226eac1be&oe=5EB9F85A",
        isVideo: false,
        tagged_users: [
          {
            avatar:
              "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/67775370_1254208501433066_1523271818666835968_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=VH075GSezoAAX_3-C48&oh=50942804c3be873b91f56f60370656c8&oe=5EB8D3E3",
            name: "Anastasia Karanikolaou",
            username: "stassiebaby",
          },
        ],
      },
      {
        display_url:
          "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/88378944_244138456603733_3149386129266207514_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=Q6VWSj1PeBgAX-0airb&oh=c1036cb1b9180f65963aece226eac1be&oe=5EB9F85A",
        isVideo: false,
        tagged_users: [
          {
            avatar:
              "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/67775370_1254208501433066_1523271818666835968_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=VH075GSezoAAX_3-C48&oh=50942804c3be873b91f56f60370656c8&oe=5EB8D3E3",
            name: "Anastasia Karanikolaou",
            username: "stassiebaby",
          },
        ],
      },
      {
        display_url:
          "https://scontent-vie1-1.cdninstagram.com/v/t50.2886-16/88313687_2563875087164213_3180834690883378592_n.mp4?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=vyoDorZZZA0AX_o4hn4&oe=5E93B76F&oh=e60179226abc1d9060b7bdb63cc5e045",
        isVideo: true,
        tagged_users: [
          {
            avatar:
              "https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/s150x150/67775370_1254208501433066_1523271818666835968_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=VH075GSezoAAX_3-C48&oh=50942804c3be873b91f56f60370656c8&oe=5EB8D3E3",
            name: "Anastasia Karanikolaou",
            username: "stassiebaby",
          },
        ],
      },
    ],
  },
};

export const advancedStatsReducer = createReducer(initialState, {
  [selectImage.type]: (state, action: PayloadAction<string | undefined>) => {
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
  [handleModalOpen.type]: (state, action) => {
    state.modalOpen = true;
  },
  [handleModalClose.type]: (state, action) => {
    state.modalOpen = false;
  },
});
