import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: {},
  messages: [],
  aiThreads: [],
  allAIThreads: [],
  lastUsedAIThread: '',
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
    setLastUsedAIThread(state, action) {
      const { payload } = action;
      state.lastUsedAIThread = payload;
    },
    setAiThreads(state, action) {
      const { payload } = action;
      state.aiThreads = payload;
    },
    setAllAIThreads(state, action) {
      const { payload } = action;
      state.allAIThreads = payload;
    },
  },
});

const messagesReducer = messagesSlice.reducer;
export const {
  setMessages,
  setIncomingMessages,
  setMessageStatus,
  setNewMessageDot,
  setLastUsedAIThread,
  setAiThreads,
  setAllAIThreads,
} = messagesSlice.actions;

export default messagesReducer;
