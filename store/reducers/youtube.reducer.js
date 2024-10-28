import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataFetched: false,
  channelDetails: {
    id: '',
    description: '',
    title: '',
    thumbnail: '',
  },
  videos: [],
  totalYoutubeVideos: 0,
  youtubeNextPageToken: '',
};

const youtubeSlice = createSlice({
  name: 'youtube',
  initialState,
  reducers: {
    setYoutubeVideos(state, action) {
      state.dataFetched = action.payload.dataFetched;
      state.videos = action.payload.videos;
      state.totalYoutubeVideos = action.payload.totalYoutubeVideos;
      state.youtubeNextPageToken = action.payload.nextPageToken;
    },
    setYoutubeChannel(state, action) {
      const { payload } = action;
      state.channelDetails = payload;
    },

    setNextPageToken: (state, action) => {
      const { payload } = action;
      state.nextPageToken = payload;
    },

    setTotalResults: (state, action) => {
      const { payload } = action;
      state.totalResults = payload;
    },

    setVisitingPage: (state, action) => {
      const { payload } = action;
      state.visitingPage = payload;
    },

    setIncrementPage: (state, action) => {
      state.page += 1;
    },
  },
});

export const {
  setYoutubeVideos,
  setYoutubeChannel,
  setTotalResults,
  setNextPageToken,
  setVisitingPage,
  setIncrementPage,
} = youtubeSlice.actions;

export default youtubeSlice.reducer;
