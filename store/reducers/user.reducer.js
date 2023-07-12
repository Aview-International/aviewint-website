import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  averageVideoDuration: '',
  categories: [],
  defaultLanguage: '',
  email: '',
  firstName: '',
  instagram_access_token: '',
  instagram_access_token_expiry: undefined,
  instagram_account_id: '',
  instagram_account_type: '',
  instagram_username: '',
  languages: [],
  lastName: '',
  monthlyView: '',
  pendingVideos: undefined,
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
