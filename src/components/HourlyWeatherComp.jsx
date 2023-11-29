import React from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Moment from "moment";
function HourlyWeatherComp({ data }) {
  const { t } = useTranslation();

  return (
    <div>
      <Container fluid className="screen">
        <Row>
          {data.list.slice(1, 8).map((weather, index) => {
            return (
              <Col
                key={index}
                className="border-box third-background m-2 text-center"
              >
                <h5 className="text-grey">
                  {" "}
                  {/* {changeDaylang(
                  Moment(weather.dt_txt.slice(0, 10)).format("dddd")
                )} */}
                  {t(Moment(weather.dt_txt.slice(0, 10)).format("dddd"))}
                  {weather.dt_txt.slice(10, 16)}
                </h5>
                <h5> {Math.round(weather.main.temp)} °C</h5>
                <h5> {t(weather.weather[0].description)} </h5>
              </Col>
            );
          })}
        </Row>
        <Row>
          {data.list.slice(9, 16).map((weather, index) => {
            return (
              <Col
                key={index}
                className="border-box third-background m-2 text-center"
              >
                <h5 className="text-grey">
                  {" "}
                  {t(Moment(weather.dt_txt.slice(0, 10)).format("dddd"))}
                  {weather.dt_txt.slice(10, 16)}
                </h5>
                <h5> {Math.round(weather.main.temp)} °C</h5>
                <h5> {t(weather.weather[0].description)} </h5>
              </Col>
            );
          })}
        </Row>
        <Row>
          {data.list.slice(17, 24).map((weather, index) => {
            return (
              <Col
                key={index}
                className="border-box third-background m-2 text-center"
              >
                <h5 className="text-grey">
                  {" "}
                  {t(Moment(weather.dt_txt.slice(0, 10)).format("dddd"))}
                  {weather.dt_txt.slice(10, 16)}
                </h5>
                <h5> {Math.round(weather.main.temp)} °C</h5>
                <h5> {t(weather.weather[0].description)} </h5>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container fluid className="mobile">
        <Row>
          {data.list.slice(1, 3).map((weather, index) => {
            return (
              <Col
                key={index}
                className="border-box third-background m-2 text-center"
              >
                <h5 className="text-grey">
                  {" "}
                  {/* {changeDaylang(
                  Moment(weather.dt_txt.slice(0, 10)).format("dddd")
                )} */}
                  {t(Moment(weather.dt_txt.slice(0, 10)).format("dddd"))}
                  {weather.dt_txt.slice(10, 16)}
                </h5>
                <h5> {Math.round(weather.main.temp)} °C</h5>
                <h5> {t(weather.weather[0].description)} </h5>
              </Col>
            );
          })}
        </Row>
        <Row>
          {data.list.slice(4, 6).map((weather, index) => {
            return (
              <Col
                key={index}
                className="border-box third-background m-2 text-center"
              >
                <h5 className="text-grey">
                  {" "}
                  {t(Moment(weather.dt_txt.slice(0, 10)).format("dddd"))}
                  {weather.dt_txt.slice(10, 16)}
                </h5>
                <h5> {Math.round(weather.main.temp)} °C</h5>
                <h5> {t(weather.weather[0].description)} </h5>
              </Col>
            );
          })}
        </Row>
        <Row>
          {data.list.slice(7, 9).map((weather, index) => {
            return (
              <Col
                key={index}
                className="border-box third-background m-2 text-center"
              >
                <h5 className="text-grey">
                  {" "}
                  {t(Moment(weather.dt_txt.slice(0, 10)).format("dddd"))}
                  {weather.dt_txt.slice(10, 16)}
                </h5>
                <h5> {Math.round(weather.main.temp)} °C</h5>
                <h5> {t(weather.weather[0].description)} </h5>
              </Col>
            );
          })}
        </Row>
        <Row>
          {data.list.slice(10, 12).map((weather, index) => {
            return (
              <Col
                key={index}
                className="border-box third-background m-2 text-center"
              >
                <h5 className="text-grey">
                  {" "}
                  {t(Moment(weather.dt_txt.slice(0, 10)).format("dddd"))}
                  {weather.dt_txt.slice(10, 16)}
                </h5>
                <h5> {Math.round(weather.main.temp)} °C</h5>
                <h5> {t(weather.weather[0].description)} </h5>
              </Col>
            );
          })}
        </Row>
        <Row>
          {data.list.slice(13, 15).map((weather, index) => {
            return (
              <Col
                key={index}
                className="border-box third-background m-2 text-center"
              >
                <h5 className="text-grey">
                  {" "}
                  {t(Moment(weather.dt_txt.slice(0, 10)).format("dddd"))}
                  {weather.dt_txt.slice(10, 16)}
                </h5>
                <h5> {Math.round(weather.main.temp)} °C</h5>
                <h5> {t(weather.weather[0].description)} </h5>
              </Col>
            );
          })}
        </Row>
        <Row>
          {data.list.slice(16, 18).map((weather, index) => {
            return (
              <Col
                key={index}
                className="border-box third-background m-2 text-center"
              >
                <h5 className="text-grey">
                  {" "}
                  {t(Moment(weather.dt_txt.slice(0, 10)).format("dddd"))}
                  {weather.dt_txt.slice(10, 16)}
                </h5>
                <h5> {Math.round(weather.main.temp)} °C</h5>
                <h5> {t(weather.weather[0].description)} </h5>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default HourlyWeatherComp;
