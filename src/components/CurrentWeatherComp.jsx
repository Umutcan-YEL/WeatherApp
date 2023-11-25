import React from "react";
import { useTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Moment from "moment";
import { FaCalendar } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
function CurrentWeatherComp({ data }) {
  const { t } = useTranslation();

  if (data.city === undefined) {
    return <h1>loading</h1>;
  } else {
    return (
      <Container>
        <Row>
          <Col>
            <Row>
              <Col style={{ textAlign: "left" }}>
                {" "}
                <h4> {t("Now")} </h4>
              </Col>
            </Row>
            <Row className="mt-2 mb-2">
              <Col style={{ margin: "auto" }}>
                <h1> {Math.round(data.list[0].main.temp)}°C </h1>{" "}
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>{t(data.list[0].weather[0].description)}</h5>{" "}
              </Col>
            </Row>
          </Col>
          <Col style={{ margin: "auto" }}>
            <img
              className="picture-center"
              src={`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
              alt="icon"
            />
          </Col>

          <hr />
          <Row>
            <Col>
              <h5>
                {" "}
                <FaCalendar style={{ marginRight: "5" }} />{" "}
                {t(Moment(data.list[0].dt_txt.slice(0, 10)).format("dddd"))}
              </h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>
                {" "}
                <HiOutlineLocationMarker style={{ marginRight: "10" }} />
                {data.city.name} ,{data.city.country}
              </h5>
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default CurrentWeatherComp;
