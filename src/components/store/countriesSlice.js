import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCountries } from "../countries-list/service";

const initialState = {
  countriesList: [],
  status: "idle",
};

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const countries = await getCountries();
    return countries;
  }
);

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        if (state.status === "succeeded") {
          return;
        }
        state.status = "succeeded";
        state.countriesList.push(...action.payload);
      });
  },
});

export default countriesSlice.reducer;
