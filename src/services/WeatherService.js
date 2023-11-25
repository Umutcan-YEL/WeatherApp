import axios from "axios";

const apiKey = "a5a95c68cdaaa0819a9aa23f04236fa1";

// export const getWeatherDataCords = async (sendingData) => {
//   try {
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/forecast?${
//         sendingData.city === undefined
//           ? `lat=${sendingData.lat}&lon=${sendingData.lon}`
//           : `q=${sendingData.city}`
//       }&units=Metric&appid=${apiKey}&lang=${sendingData.lang}`
//     );
//     return response.data;
//   } catch (error) {
//     console.log("Veriler Getirilirken Hata Oluştu ", error);
//   }
// };

// export const getWeatherDataCity = async (sendingData) => {
//   try {
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${sendingData.city}&units=Metric&appid=${apiKey}&lang=${sendingData[0].lang}`
//     );
//     return response.data;
//   } catch (error) {
//     console.log("Veriler Getirilirken Hata Oluştu ", error);
//   }
// };

export const getWeatherDataCords = async (sendingData) => {
  try {
    if (sendingData[0].cords === false) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${sendingData[0].city}&units=Metric&appid=${apiKey}&lang=${sendingData[0].lang}`
      );
      return response.data;
    } else {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${sendingData[0].lat}&lon=${sendingData[0].lon}&units=Metric&appid=${apiKey}&lang=${sendingData[0].lang}`
      );
      return response.data;
    }
  } catch (error) {
    // if (sendingData[0].lang === "en") {
    //   alert("Please enter a valid city");
    // }
    // if (sendingData[0].lang === "tr") {
    //   alert("Lütfen Geçerli bir Şehir Giriniz");
    // }
    const cityerror = true;
    return cityerror;
  }
};

// if (
//   !sendingData ||
//   (!sendingData.city &&
//     (!sendingData[0] || !sendingData[0].lat || !sendingData[0].lon))
// ) {
//   console.log("Geçersiz veri");
//   return; // geçersiz veri durumunda işlem yapmayı durdur
// }

// try {
//   if (sendingData.city) {
//     // Şehir bilgisi varsa
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${sendingData.city}&units=Metric&appid=${apiKey}&lang=${sendingData[0].lang}`
//     );
//     return response.data;
//   } else if (sendingData[0] && sendingData[0].lat && sendingData[0].lon) {
//     // Koordinat bilgisi varsa
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/forecast?lat=${sendingData[0].lat}&lon=${sendingData[0].lon}&units=Metric&appid=${apiKey}&lang=${sendingData[0].lang}`
//     );
//     return response.data;
//   }
// } catch (error) {
//   console.log("Veriler Getirilirken Hata Oluştu ", error);
//   throw error; // Hata oluştuğunda hatayı dışa aktar
// }
