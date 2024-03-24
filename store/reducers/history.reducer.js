import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pendingJobs: [],
  completedJobs: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setPendingJobs(state, action) {
      state.pendingJobs = action.payload;
    },

    setCompletedJobs(state, action) {
      state.completedJobs = action.payload;
    },
  },
});

export const { setPendingJobs, setCompletedJobs } = historySlice.actions;

export default historySlice.reducer;
