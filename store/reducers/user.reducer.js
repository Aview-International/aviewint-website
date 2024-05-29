import  { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  averageVideoDuration: '',
  categories: [],
  defaultLanguage: '',
  email: '',
  firstName: '',
  languages: [],
  lastName: '',
  monthlyView: '',
  pendingVideos: [],
  completedVideos: [],
  picture: '',
  preferences: [],
  region: [],
  role: '',
  saveSettings: false,
  uid: '',
  usage: '',
  youtubeChannelId: '',
  youtubeChannelName: '',
  _id: '',
  chatAssistantOption: 'Title',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { payload } = action;
      return { ...state, ...payload };
    },
    setAuthState(state, action) {
      const { payload } = action;
      return { ...state, isLoggedIn: payload };
    },
  },
});

export const { setUser, setAuthState } = userSlice.actions;

export default userSlice.reducer;
