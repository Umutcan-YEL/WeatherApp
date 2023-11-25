// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { getWeatherDataCity } from "../services/WeatherService";

// export const fetchWeatherDataCity = createAsyncThunk(
//   "data/getData",
//   async (sendingData) => {
//     return await getWeatherDataCity(sendingData);
//   }
// );

// const initialState = {
//   data: [],
//   loading: false,
//   error: null,
// };
// const WeatherDataCitySlice = createSlice({
//   name: "data",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchWeatherDataCity.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchWeatherDataCity.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchWeatherDataCity.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default WeatherDataCitySlice.reducer;
