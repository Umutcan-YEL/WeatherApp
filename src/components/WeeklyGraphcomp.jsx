import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Container from "react-bootstrap/Container";
import Moment from "moment";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useTranslation } from "react-i18next";
function WeeklyGraphcomp({ data }) {
  const { t } = useTranslation();
  const list = data.list;
  const de = list.map((data) => {
    return data;
  });

  const MondayData = de.filter(
    (item) => t(Moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Monday")
  );
  const TuesdayData = de.filter(
    (item) =>
      t(Moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Tuesday")
  );
  const WednesdayData = de.filter(
    (item) =>
      t(Moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Wednesday")
  );
  const ThursdayData = de.filter(
    (item) =>
      t(Moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Thursday")
  );
  const FridayData = de.filter(
    (item) => t(Moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Friday")
  );
  const SaturdayData = de.filter(
    (item) =>
      t(Moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Saturday")
  );
  const SundayData = de.filter(
    (item) => t(Moment(item.dt_txt.slice(0, 10)).format("dddd")) === t("Sunday")
  );

  const Monday = [
    {
      temp: MondayData.map((item) => {
        return Math.round(item.main.temp);
      }),
      time: MondayData.map((item) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];
  const Tuesday = [
    {
      temp: TuesdayData.map((item) => {
        return Math.round(item.main.temp);
      }),
      time: TuesdayData.map((item) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];
  const Wednesday = [
    {
      temp: WednesdayData.map((item) => {
        return Math.round(item.main.temp);
      }),
      time: WednesdayData.map((item) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];
  const Thursday = [
    {
      temp: ThursdayData.map((item) => {
        return Math.round(item.main.temp);
      }),
      time: ThursdayData.map((item) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];
  const Friday = [
    {
      temp: FridayData.map((item) => {
        return Math.round(item.main.temp);
      }),
      time: FridayData.map((item) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];
  const Saturday = [
    {
      temp: SaturdayData.map((item) => {
        return Math.round(item.main.temp);
      }),
      time: SaturdayData.map((item) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];
  const Sunday = [
    {
      temp: SundayData.map((item) => {
        return Math.round(item.main.temp);
      }),
      time: SundayData.map((item) => {
        return item.dt_txt.slice(10, 16);
      }),
    },
  ];

  const MondaygraphData = {
    labels: Monday[0].time.map((item) => {
      return item;
    }),

    datasets: [
      {
        label: "Sıcaklık",
        data: Monday[0].temp.map((item) => {
          return item;
        }),
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const TuesdaygraphData = {
    labels: Tuesday[0].time.map((item) => {
      return item;
    }),

    datasets: [
      {
        label: "Sıcaklık",
        data: Tuesday[0].temp.map((item) => {
          return item;
        }),
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const WednesdaygraphData = {
    labels: Wednesday[0].time.map((item) => {
      return item;
    }),

    datasets: [
      {
        label: "Sıcaklık",
        data: Wednesday[0].temp.map((item) => {
          return item;
        }),
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const ThursdaygraphData = {
    labels: Thursday[0].time.map((item) => {
      return item;
    }),

    datasets: [
      {
        label: "Sıcaklık",
        data: Thursday[0].temp.map((item) => {
          return item;
        }),
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const FridaygraphData = {
    labels: Friday[0].time.map((item) => {
      return item;
    }),

    datasets: [
      {
        label: "Sıcaklık",
        data: Friday[0].temp.map((item) => {
          return item;
        }),
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const SaturdaygraphData = {
    labels: Saturday[0].time.map((item) => {
      return item;
    }),

    datasets: [
      {
        label: "Sıcaklık",
        data: Saturday[0].temp.map((item) => {
          return item;
        }),
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const SundaygraphData = {
    labels: Sunday[0].time.map((item) => {
      return item;
    }),

    datasets: [
      {
        label: "Sıcaklık",
        data: Sunday[0].temp.map((item) => {
          return item;
        }),
        fill: true,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const bugun = new Date();
  const gun = bugun.getDay();
  return (
    <Container fluid>
      <Tabs
        defaultActiveKey={gun}
        id="uncontrolled-tab-example"
        className="mb-3"
        fill
        style={{ height: "3rem", color: "white" }}
      >
        <Tab
          eventKey={1}
          title={t("Monday")}
          disabled={Monday[0].temp.length > 0 ? false : true}
        >
          {" "}
          <Line
            data={MondaygraphData}
            options={options}
            style={{ maxHeight: "52vh" }}
          />
        </Tab>
        <Tab
          eventKey={2}
          title={t("Tuesday")}
          disabled={Tuesday[0].temp.length > 0 ? false : true}
        >
          <Line
            data={TuesdaygraphData}
            options={options}
            style={{ maxHeight: "52vh" }}
          />
        </Tab>
        <Tab
          eventKey={3}
          title={t("Wednesday")}
          disabled={Wednesday[0].temp.length > 0 ? false : true}
        >
          <Line
            data={WednesdaygraphData}
            options={options}
            style={{ maxHeight: "52vh" }}
          />
        </Tab>
        <Tab
          eventKey={4}
          title={t("Thursday")}
          disabled={Thursday[0].temp.length > 0 ? false : true}
        >
          <Line
            data={ThursdaygraphData}
            options={options}
            style={{ maxHeight: "52vh" }}
          />
        </Tab>
        <Tab
          eventKey={5}
          title={t("Friday")}
          disabled={Friday[0].temp.length > 0 ? false : true}
        >
          <Line
            data={FridaygraphData}
            options={options}
            style={{ maxHeight: "52vh" }}
          />
        </Tab>
        <Tab
          eventKey={6}
          title={t("Saturday")}
          disabled={Saturday[0].temp.length > 0 ? false : true}
        >
          <Line
            data={SaturdaygraphData}
            options={options}
            style={{ maxHeight: "52vh" }}
          />
        </Tab>
        <Tab
          eventKey={0}
          title={t("Sunday")}
          disabled={Sunday[0].temp.length > 0 ? false : true}
        >
          <Line
            data={SundaygraphData}
            options={options}
            style={{ maxHeight: "52vh" }}
          />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default WeeklyGraphcomp;
