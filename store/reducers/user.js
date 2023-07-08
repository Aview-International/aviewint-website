import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  picture: '',
  email: '',
  averageDuration: '',
  languages: [],
  monthlyView: '',
  region: [],
  role: '',
  totalFollowers: '',
  usage: '',
  youtubeChannelId: '',
  youtubeChannelName: '',
  uid: '',
  token: '',
  preferences: [],
  saveSettings: false,
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
