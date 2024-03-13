import  { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  token: '',
  uid: '',
  usage: '',
  youtubeChannelId: '',
  youtubeChannelName: '',
  _id: '',
  recordedVoiceSamples: [],
  uploadedVoiceSamples: [],
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
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
