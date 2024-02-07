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
      SUPPORTED_REGIONS.forEach(({ data }) => {
        data.forEach((el) => {
          // check if langsArray already contains an object with the same language
          const existingLanguage = langsArray.find(
            (lang) => lang.language === el.languageName
          );
          if (!existingLanguage) {
            // if language doesn't exist, add it to langsArray
            langsArray.push({
              language: el.languageName,
              dialect: el.localDialect,
            });
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
