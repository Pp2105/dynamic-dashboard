import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { AiFillSetting, AiOutlineClose } from "react-icons/ai";
import "./AllCharts.css";

const AllCharts = (props) => {
  const [title, setTitle] = useState("All charts");
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const [click, setClick] = useState(false);
  const [chartType, setChartType] = useState("line");

  const handleChartTypeChange = (e) => {
    setChartType(e.target.value);
  };

  const chartData = {
    line: [1, 2, 3, 4, 5],
    bar: [1, 2, 3, 4, 5],
    scatter: [
      [161.2, 51.6],
      [167.5, 59.0],
      [159.5, 49.2],
      [157.0, 63.0],
      [155.8, 53.6],
      [170.0, 59.0],
      [159.1, 47.6],
      [166.0, 69.8],
      [176.2, 66.8],
      [160.2, 75.2],
      [172.5, 55.2],
      [170.9, 54.2],
      [172.9, 62.5],
      [153.4, 42.0],
      [160.0, 50.0],
      [147.2, 49.8],
      [168.2, 49.2],
      [175.0, 73.2],
      [157.0, 47.8],
      [167.6, 68.8],
      [159.5, 50.6],
      [175.0, 82.5],
      [166.8, 57.2],
      [156.0, 64.4],
      [160.0, 48.8],
      [167.1, 62.2],
      [158.0, 55.5],
      [167.6, 57.8],
      [156.0, 54.6],
      [162.1, 59.2],
      [173.4, 52.7],
      [159.8, 53.2],
      [170.5, 64.5],
      [159.2, 51.8],
      [157.5, 56.0],
      [161.3, 63.6],
      [162.6, 63.2],
    ],
    arearange: [
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
      [4, 2],
      [7, 3],
      [4, 7],
      [2, 5],
      [6, 2],
      [3, 9],
      [7, 8],
      [3, 1],
    ],
    boxplot: [
      [760, 800, 840, 860, 890, 900, 920],
      [730, 760, 790, 810, 850, 860, 880],
      [690, 710, 740, 750, 790, 800, 810],
      [650, 660, 670, 690, 710, 720, 730],
    ],
    pie: [
      ["Firefox", 45.0],
      ["IE", 26.8],
      ["Chrome", 12.8],
      ["Safari", 8.5],
    ],
    doughnut: [
      ["Firefox", 45.0],
      ["IE", 26.8],
      ["Chrome", 12.8],
      ["Safari", 8.5],
    ],
  };

  let chartOptions = chartType
    ? {
        title: "",
        series: [
          {
            data: chartData[chartType],
            type: chartType,
          },
        ],
        plotOptions: {
          scatter: {
            marker: {
              radius: 4,
              symbol: "circle",
              states: {
                hover: {
                  enabled: true,
                  lineColor: "rgb(100,100,100)",
                },
              },
            },
            states: {
              hover: {
                marker: {
                  enabled: false,
                },
              },
            },
            jitter: {
              x: 0.005,
            },
          },
        },
      }
    : null;

  return (
    <>
      <div className="conatiner">
        <h2>{title}</h2>
        <div className="settingsUI">
          {click ? (
            <AiOutlineClose onClick={() => setClick(false)} />
          ) : (
            <AiFillSetting onClick={() => setClick(true)} />
          )}

          {click && (
            <div className="settingFrame">
              <input type="text" value={title} onChange={handleInputChange} />

              <select
                className="dropdown-menu"
                value={chartType}
                onChange={handleChartTypeChange}
              >
                <option value="">Select a chart type</option>
                <option value="line">Line</option>
                <option value="bar">Bar</option>
                <option value="scatter">Scatter</option>
                <option value="arearange">Area Range</option>
                <option value="boxplot">Box Plot</option>
                <option value="pie">Pie</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {chartOptions && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </>
  );
};

export default AllCharts;
