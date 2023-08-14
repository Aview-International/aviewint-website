import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages(state, action) {
      const { payload } = action;
      return payload;
    },
  },
});

const messagesReducer = messagesSlice.reducer;
export const { setMessages } = messagesSlice.actions;

export default messagesReducer;
