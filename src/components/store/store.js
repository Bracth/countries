import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import countriesReducer from "./countriesSlice";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    countries: countriesReducer,
  },
});

export default store;
