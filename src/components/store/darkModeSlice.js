import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeMode: (state) => {
      if (state.darkMode) {
        state.darkMode = false;
      } else {
        state.darkMode = true;
      }
    },
  },
});

export const { changeMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
