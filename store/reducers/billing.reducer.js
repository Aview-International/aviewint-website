import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const billingSlice = createSlice({
  name: 'billing',
  initialState,
  reducers: {
    setBillingHistory(state, action) {
      state.push(action.payload);
    },
  },
});

export const { setBillingHistory } = billingSlice.actions;

export default billingSlice.reducer;
