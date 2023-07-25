import { createSlice } from "@reduxjs/toolkit";

export const LocalizationSlice = createSlice({
  name: 'localization',
  initialState: { language: JSON.parse(localStorage.getItem('language')) || 'tr' },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem('language', JSON.stringify(state.language))
    },
  },
})

export const { changeLanguage } = LocalizationSlice.actions

export default LocalizationSlice.reducer