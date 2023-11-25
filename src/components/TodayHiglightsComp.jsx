import React from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Moment from "moment";
import { FaWind } from "react-icons/fa6";
import { FaDroplet } from "react-icons/fa6";
import { FaTemperatureFull } from "react-icons/fa6";
function TodayHiglightsComp({ data }) {
  const { t, i18n } = useTranslation();

  return (
    <Container fluid>
      <Row>
        <Col>
          {" "}
          <h5> {t("Today-Highlight")} </h5>
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="border-box third-background m-2 ">
          <h5 className="text-grey"> {t("Wind")} </h5>
          <br />
          <Row>
            <Col md={4} className="text-center">
              {" "}
              <h3>
                {" "}
                <FaWind />
              </h3>{" "}
            </Col>
            <Col>
              {" "}
              <h3>{data.list[0].wind.speed} K/MH</h3>{" "}
            </Col>{" "}
          </Row>
        </Col>
        {console.log(data)}
        <Col className="border-box third-background m-2 ">
          <h5 className="text-grey"> {t("Humidity")} </h5> <br />
          <Row>
            <Col md={4} className="text-center">
              <h3>
                {" "}
                <FaDroplet />
              </h3>
            </Col>

            <Col>
              {" "}
              <h3>{data.list[0].main.humidity} %</h3>{" "}
            </Col>
          </Row>
        </Col>
        <Col className="border-box third-background m-2 ">
          <h5 className="text-grey"> {t("Pressure")} </h5> <br />
          <Row>
            <Col md={4} className="text-center">
              <h3>
                {" "}
                <FaWind />
              </h3>
            </Col>

            <Col>
              {" "}
              <h3>{data.list[0].main.pressure} hPa</h3>{" "}
            </Col>
          </Row>
        </Col>
        <Col className="border-box third-background m-2 ">
          <h5 className="text-grey"> {t("Feels-Like")} </h5> <br />
          <Row>
            <Col md={4} className="text-center">
              <h3>
                {" "}
                <FaTemperatureFull />
              </h3>
            </Col>

            <Col>
              {" "}
              <h3>{Math.round(data.list[0].main.feels_like)} °C</h3>{" "}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TodayHiglightsComp;
