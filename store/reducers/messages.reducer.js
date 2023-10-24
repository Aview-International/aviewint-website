import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: {},
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages(state, action) {
      const { payload } = action;
      state.messages = payload;
    },

    setIncomingMessages(state, action) {
      const { payload } = action;
      state.messages.push(payload);
    },

    setMessageStatus(state, action) {
      const { payload } = action;
      state.status = payload;
    },

    setNewMessageDot(state, action) {
      const { payload } = action;
      if (state.status?.readByUser) {
        state.status.readByUser = payload;
      }
    },
  },
});

const messagesReducer = messagesSlice.reducer;
export const {
  setMessages,
  setIncomingMessages,
  setMessageStatus,
  setNewMessageDot,
} = messagesSlice.actions;

export default messagesReducer;
