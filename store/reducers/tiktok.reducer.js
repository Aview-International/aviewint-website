import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataFetched: false,
  videos: [],
};

const tiktokSlice = createSlice({
  name: 'tiktok',
  initialState,
  reducers: {
    setTikTokVideos(state, action) {
      state.videos.push(...action.payload.videos);
      state.dataFetched = action.payload.dataFetched;
    },
  },
});

export const { setTikTokVideos } = tiktokSlice.actions;

export default tiktokSlice.reducer;
