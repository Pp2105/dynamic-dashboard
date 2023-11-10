import React, { useState, useEffect } from "react";
import HighCharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import "./Settings.css";
import highchartsMore from "highcharts/highcharts-more";
import EditTitle from "./EditTitle";
import DataFetcher from "../DataFetcher";
highchartsMore(HighCharts);

const AreaRangeChart = () => {
  const updateSeries = (data) => {
    setOptions({ series: [{ data: data }] });
  };

  const updateTitle = (newTitle) => {
    setOptions({
      ...options,
      title: {
        text: newTitle,
      },
    });
  };

  const [options, setOptions] = useState({
    title: {
      text: "My chart",
    },
    legend: {
      layout: "vertical",
      backgroundColor: "#FFFFFF",
      floating: true,
      align: "left",
      x: 100,
      verticalAlign: "top",
      y: 70,
    },
    chart: {
      type: "arearange",
      zoomType: "xy",
    },
    title: {
      text: "Temperature variation by day",
    },
    xAxis: {
      type: "datetime",
      accessibility: {
        rangeDescription: "Range: Jan 1st 2017 to Dec 31 2017.",
      },
    },
    yAxis: {
      title: {
        text: null,
      },
    },

    tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: "°C",
      xDateFormat: "%A, %b %e",
    },

    series: [
      {
        name: "Temperatures",

        color: {
          linearGradient: {
            x1: 0,
            x2: 0,
            y1: 0,
            y2: 1,
          },
          stops: [
            [0, "#ff0000"],
            [1, "#0000ff"],
          ],
        },
      },
    ],
    //
  });

  return (
    <div>
      <div className="editSettings">
        <EditTitle updateTitle={updateTitle} />
      </div>
      <div className="chart-content">
        <DataFetcher updateSeries={updateSeries} />
        <HighchartsReact
          className="highcharts"
          highcharts={HighCharts}
          options={options}
        />
      </div>
    </div>
  );
};

export default AreaRangeChart;
