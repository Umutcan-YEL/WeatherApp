import axios from "axios";

const apiKey = "a5a95c68cdaaa0819a9aa23f04236fa1";

export const getWeatherData = async (city, lat, lon, language) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?${
        !city ? `lat=${lat}&lon=${lon}` : `q=${city}`
      }&units=Metric&appid=${apiKey}&lang=${language}`
    );
    return response.data;
  } catch (error) {
    throw new Error(
      "Veriler Getirilirken hata oluştu. Lütfen Verilerinizi Kontrol edin"
    );
  }
};
