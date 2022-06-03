import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCountrieByName, getCountries } from "../countries-list/service";

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

export const fetchCountrie = createAsyncThunk(
  "countries/fetchCountrie",
  async (countrieName) => {
    const countrie = await fetchCountrieByName(countrieName);
    return countrie;
  }
);

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.fulfilled, (state, action) => {
        if (state.status === "succeeded") {
          return;
        }
        state.status = "succeeded";
        state.countriesList = [...action.payload];
      })
      .addCase(fetchCountrie.fulfilled, (state, action) => {
        state.countriesList.push(...action.payload);
      });
  },
});

export default countriesSlice.reducer;

export const getCountrie = (countrieName) => (state) => {
  return state.countries.countriesList.find(
    (countrie) => countrie.name === countrieName
  );
};
