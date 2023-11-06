import { createSlice } from '@reduxjs/toolkit';
import { SUPPORTED_REGIONS } from '../../constants/constants';

const initialState = {
  allLanguages: [],
};

const aviewSlice = createSlice({
  name: 'aview',
  initialState,
  reducers: {
    setAllLanguages: (state, action) => {
      const langsArray = [];
      SUPPORTED_REGIONS.map(({ data }) => {
        data.map((el) => {
          if (!langsArray.includes(el.languageName)) {
            langsArray.push(el.languageName);
          }
        });
      });
      state.allLanguages = langsArray;
    },
  },
});

export const { setAllLanguages } = aviewSlice.actions;

export default aviewSlice.reducer;
