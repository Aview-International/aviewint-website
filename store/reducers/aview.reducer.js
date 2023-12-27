import { createSlice } from '@reduxjs/toolkit';
import { SUPPORTED_REGIONS } from '../../constants/constants';

const initialState = {
  allLanguages: [],
  allPlans: [],
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
    setAllPlans: (state, action) => {
      const { payload } = action;
      state.allPlans = payload;
    },
  },
});

export const { setAllLanguages, setAllPlans } = aviewSlice.actions;

export default aviewSlice.reducer;
