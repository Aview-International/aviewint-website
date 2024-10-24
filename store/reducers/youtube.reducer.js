import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataFetched: false,
  channelDetails: {
    id: '',
    description: '',
    title: '',
    thumbnail: '',
  },
  videos: {},
  page: 0,
  totalResults: 0,
  isFirstRequest: true,
  visitingPage: 1,
};

const youtubeSlice = createSlice({
  name: 'youtube',
  initialState,
  reducers: {
    setYoutubeVideos(state, action) {
      state.dataFetched = action.payload.dataFetched;

      state.videos[state.page] = action.payload.videos;
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
