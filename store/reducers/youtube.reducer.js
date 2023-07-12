import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataFetched: false,
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
  },
});

export const { setYoutubeVideos } = youtubeSlice.actions;

export default youtubeSlice.reducer;
