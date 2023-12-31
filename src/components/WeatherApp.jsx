import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getWeatherData } from "../services/WeatherService";
import LocationModal from "./LocationModal";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Moment from "moment";
import { useTranslation } from "react-i18next";
const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [city, setCity] = useState();
  const [number, setNumber] = useState(5);
  const { t, i18n } = useTranslation();
  let lang = i18n.language;

  const changeDaylang = (day) => {
    if (lang === "tr") {
      switch (day) {
        case "Monday":
          return "Pazartesi";
        case "Tuesday":
          return "Salı";
        case "Wednesday":
          return "Çarşamba";
        case "Thursday":
          return "Perşembe";
        case "Friday":
          return "Cuma";
        case "Saturday":
          return "Cumartesi";
        case "Sunday":
          return "Pazar";
        default:
          return day;
      }
    } else if (lang === "en") {
      return day;
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event);
  };
  const changeLang = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      setCity(searchQuery);
    }
  };
  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }

    function success(position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    }

    function error() {
      if (city === undefined || null) {
        setCity("Çorum");
      }
    }
    getWeatherData(city, lat, lon, lang).then((response) =>
      setWeatherData(response)
    );
  }, [city, lat, lon, lang]);

  if (!weatherData) {
    return <LocationModal />;
  }

  return (
    <div className="Weather">
      <br />
      <Container fluid>
        <Row>
          <Col>
            <TextField
              id="filled"
              label={t("City")}
              variant="filled"
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleEnter}
              autoComplete="off"
            />
            <br />
            <br />
          </Col>

          <Col md={9}>
            <h2 className="text-center">
              {t("Current-Weather")}{" "}
              <p style={{ color: "#ffd700" }}>{weatherData.city.name}</p>{" "}
            </h2>
            <Table
              striped
              bordered
              responsive
              size="sm"
              className="text-center table-style"
              // variant="dark"
            >
              <thead>
                <tr>
                  <th>{t("Hour")}</th>
                  <th>{t("Description")}</th>
                  <th></th>
                  <th>{t("Temperature")}</th>
                  <th>{t("Feels-Like")}</th>
                  <th>{t("Humidity")}</th>
                  <th>{t("Wind")}</th>
                </tr>
              </thead>
              <tbody>
                <tr key={weatherData.list[0].dt}>
                  <td>
                    <br />
                    {changeDaylang(
                      Moment(weatherData.list[0].dt_txt.slice(0, 10)).format(
                        "dddd"
                      )
                    )}
                    {weatherData.list[0].dt_txt.slice(10, 16)}
                  </td>
                  <td>
                    <br />
                    {weatherData.list[0].weather[0].description}
                  </td>
                  <td>
                    {" "}
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`}
                      alt="icon"
                    />
                  </td>
                  <td>
                    <br />
                    {weatherData.list[0].main.temp}°C
                  </td>
                  <td>
                    <br />
                    {weatherData.list[0].main.feels_like}°C
                  </td>
                  <td>
                    <br />%{weatherData.list[0].main.humidity}
                  </td>
                  <td>
                    <br />
                    {weatherData.list[0].wind.speed} km/h
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
            <ButtonGroup
              style={{ marginLeft: "2rem" }}
              variant="text"
              aria-label="text button group"
            >
              <Button onClick={() => changeLang("tr")}>Türkçe</Button>
              <Button onClick={() => changeLang("en")}>English</Button>
            </ButtonGroup>
            <Select
              sx={{ mt: 2, ml: 6, minWidth: 120 }}
              size="small"
              label={number}
              value={number}
              variant="filled"
              onChange={handleChange}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>50</MenuItem>
              <MenuItem value={50}>50</MenuItem>
            </Select>
            <FormHelperText sx={{ ml: 6, minWidth: 120 }}>
              {t("Table-Num")}
            </FormHelperText>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Table
          striped
          bordered
          responsive
          size="sm"
          className="text-center"
          // variant="dark"
        >
          <thead>
            <tr>
              <th>{t("Hour")}</th>
              <th>{t("Description")}</th>
              <th></th>
              <th>{t("Temperature")}</th>
              <th>{t("Feels-Like")}</th>
              <th>{t("Humidity")}</th>
              <th>{t("Wind")}</th>
            </tr>
          </thead>
          <tbody>
            {weatherData.list.slice(1, 100).map((hours, index) => {
              return (
                index < number && (
                  <tr key={hours.dt}>
                    <td>
                      {" "}
                      <br />
                      {changeDaylang(
                        Moment(hours.dt_txt.slice(0, 10)).format("dddd")
                      )}
                      {hours.dt_txt.slice(10, 16)}
                    </td>
                    <td>
                      {" "}
                      <br />
                      {hours.weather[0].description}
                    </td>
                    <td>
                      {" "}
                      <img
                        src={`https://openweathermap.org/img/wn/${hours.weather[0].icon}@2x.png`}
                        alt="icon"
                        width={100}
                      />
                    </td>
                    <td>
                      {" "}
                      <br />
                      {hours.main.temp}°C
                    </td>
                    <td>
                      {" "}
                      <br />
                      {hours.main.feels_like} °C
                    </td>
                    <td>
                      {" "}
                      <br />% {hours.main.humidity}
                    </td>
                    <td>
                      {" "}
                      <br />
                      {hours.wind.speed} km/h
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default WeatherApp;
