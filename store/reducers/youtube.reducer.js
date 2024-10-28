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
  },
});

export const { setYoutubeVideos, setYoutubeChannel } = youtubeSlice.actions;

export default youtubeSlice.reducer;
