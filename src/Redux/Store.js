import { configureStore } from "@reduxjs/toolkit";
import WeatherCordsDataSlice from "./WeatherDataCordsSlice";
import WeatherCityDataSlice from "./WeatherDataCitySlice";

const store = configureStore({
  reducer: {
    Cordsdata: WeatherCordsDataSlice,
    Citydata: WeatherCityDataSlice,
  },
});

export default store;
