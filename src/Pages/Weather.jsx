import React from "react";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LocationModal from "../components/LocationModal";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherDataCords } from "../Redux/WeatherDataCordsSlice";
import CurrentWeatherComp from "../components/CurrentWeatherComp";
import TodayHiglightsComp from "../components/TodayHiglightsComp";
import HourlyWeatherComp from "../components/HourlyWeatherComp";
import Error from "./Error";
import Autocomplete from "@mui/material/Autocomplete";

function Weather() {
  const [searchQuery, setSearchQuery] = useState("");
  const [trigger, setTrigger] = useState(false);
  const { t, i18n } = useTranslation();
  let lang = i18n.language;

  const handleSearch = (value, event) => {
    if (value === undefined) {
      setSearchQuery(event);
    } else {
      setSearchQuery(value);
    }
  };
  const changeLang = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      const searchsendingData = [
        {
          cords: false,
          lang: lang,
          city: searchQuery,
        },
      ];
      dispatch(fetchWeatherDataCords(searchsendingData));
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (!trigger) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        console.log("Geolocation not supported");
      }

      function success(position) {
        const sendingData = [
          {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            lang: lang,
            city: "",
          },
        ];
        dispatch(fetchWeatherDataCords(sendingData));
        setTrigger(true);
      }

      function error() {
        console.log("hata Konum Erişimi Reddedildi");
        const searchsendingData = [
          {
            cords: false,
            lang: lang,
            city: "Çorum",
          },
        ];

        dispatch(fetchWeatherDataCords(searchsendingData));
      }
    }
  }, [lang, dispatch, trigger]);

  const data = useSelector((state) => state.Cordsdata.data);
  // const loading = useSelector((state) => state.Cordsdata.loading);
  // const error = useSelector((state) => state.Cordsdata.error);

  const weatherData = [
    { label: "Adana" },
    { label: "Adıyaman" },
    { label: "Afyon" },
    { label: "Ağrı" },
    { label: "Amasya" },
    { label: "Ankara" },
    { label: "Antalya" },
    { label: "Artvin" },
    { label: "Aydın" },
    { label: "Balıkesir" },
    { label: "Bilecik" },
    { label: "Bingöl" },
    { label: "Bitlis" },
    { label: "Bolu" },
    { label: "Burdur" },
    { label: "Bursa" },
    { label: "Çanakkale" },
    { label: "Çankırı" },
    { label: "Çorum" },
    { label: "Denizli" },
    { label: "Diyarkabır" },
    { label: "Edirne" },
    { label: "Elazığ" },
    { label: "Erzincan" },
    { label: "Erzurum" },
    { label: "Eskişehir" },
    { label: "Gaziantep" },
    { label: "Giresun" },
    { label: "Gümüşhane" },
    { label: "Hakkari" },
    { label: "Hatay" },
    { label: "Isparta" },
    { label: "Mersin" },
    { label: "İstanbul" },
    { label: "İzmir" },
    { label: "Kars" },
    { label: "Kastamonu" },
    { label: "Kayseri" },
    { label: "Kırklareli" },
    { label: "Kırşehir" },
    { label: "Kocaeli" },
    { label: "Konya" },
    { label: "Kütahya" },
    { label: "Malatya" },
    { label: "Manisa" },
    { label: "Kahramanmaraş" },
    { label: "Mardin" },
    { label: "Muğla" },
    { label: "Muş" },
    { label: "Nevşehir" },
    { label: "Niğde" },
    { label: "Ordu" },
    { label: "Rize" },
    { label: "Sakarya" },
    { label: "Samsun" },
    { label: "Siirt" },
    { label: "Sinop" },
    { label: "Sivas" },
    { label: "Tekirdağ" },
    { label: "Tokat" },
    { label: "Trabzon" },
    { label: "Tunceli" },
    { label: "Şanlıurfa" },
    { label: "Uşak" },
    { label: "Van" },
    { label: "Yozgat" },
    { label: "Zonguldak" },
    { label: "Aksaray" },
    { label: "Bayburt" },
    { label: "Karaman" },
    { label: "Kırıkkale" },
    { label: "Batman" },
    { label: "Şırnak" },
    { label: "Bartın" },
    { label: "Ardahan" },
    { label: "Iğdır" },
    { label: "Yalova" },
    { label: "Karabük" },
    { label: "Kilis" },
    { label: "Osmaniye" },
    { label: "Düzce" },
  ];

  if (data === true) {
    return <Error />;
  } else if (data.city === undefined) {
    return <LocationModal />;
  } else {
    return (
      <div className="background-color main text-black">
        <Container fluid className="mt-2 ">
          <Row>
            <Col className="screen"> </Col>
            <Col>
              {/* <TextField
                className="searchbar"
                id="filled-basic"
                variant="filled"
                label={t("City")}
                onChange={(e) => handleSearch(e.target.value)}
                onKeyDown={handleEnter}
                autoComplete="off"
                fullWidth
              /> */}
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={weatherData.map((option) => option.label)}
                onChange={(event, newValue) => handleSearch(newValue)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onKeyDown={handleEnter}
                    label={t("City")}
                    onChange={(e) => handleSearch(e.target.value)}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Col>
            <Col>
              <ButtonGroup
                className="second-background"
                style={{ float: "right" }}
              >
                <Button className="text-white" onClick={() => changeLang("tr")}>
                  Türkçe
                </Button>
                <Button className="text-white" onClick={() => changeLang("en")}>
                  English
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
          <Row>
            <Col
              md={2}
              xs={11}
              className="border-box second-background text-white m-3  "
            >
              <CurrentWeatherComp data={data} />
            </Col>
            <Col className="border-box second-background text-white m-3 ">
              <TodayHiglightsComp data={data} />
            </Col>
          </Row>
          <Row>
            <Col className="border-box second-background text-white m-3">
              {" "}
              <HourlyWeatherComp data={data} />{" "}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Weather;
