import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWeatherDataCords } from "../services/WeatherService";

export const fetchWeatherDataCords = createAsyncThunk(
  "data/getData",
  async (sendingData) => {
    return await getWeatherDataCords(sendingData);
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const WeatherDataCordsSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherDataCords.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWeatherDataCords.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeatherDataCords.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default WeatherDataCordsSlice.reducer;
