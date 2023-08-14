import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataFetched: false,
  channelId: '',
  videos: [],
};

const youtubeSlice = createSlice({
  name: 'youtube',
  initialState,
  reducers: {
    setYoutubeVideos(state, action) {
      state.dataFetched = action.payload.dataFetched;
      state.videos.push(...action.payload.videos);
    },

    setYoutubeChannel(state, action) {
      const { payload } = action;
      state.channelId = payload;
    },
  },
});

export const { setYoutubeVideos, setYoutubeChannel } = youtubeSlice.actions;

export default youtubeSlice.reducer;
