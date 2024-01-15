import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataFetched: false,
  voiceSamples: [],
};

const voicesSlice = createSlice({
  name: 'voices',
  initialState,
  reducers: {
    setAIVoices(state, action) {
      state.voiceSamples = action.payload;
      state.dataFetched = true;
    },
  },
});

export const { setAIVoices } = voicesSlice.actions;

export default voicesSlice.reducer;
