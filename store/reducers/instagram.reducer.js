import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataFetched: false,
  videos: [],
};

const instagramSlice = createSlice({
  name: 'instagram',
  initialState,
  reducers: {
    setInstagramVideos(state, action) {
      state.videos.push(...action.payload.videos);
      state.dataFetched = action.payload.dataFetched;
    },
  },
});

export const { setInstagramVideos } = instagramSlice.actions;

export default instagramSlice.reducer;
