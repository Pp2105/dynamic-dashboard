import React from "react";
import "react-grid-layout/css/styles.css";
import "./Dashboard.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import BarChart from "./charts/BarChart";
import BoxWhiskerPlot from "./charts/BoxWhiskerPlot";

import Scatter from "./charts/ScaterChart";
import AreaRangeChart from "./charts/AreaRangeChart";
import Allcharts from "./charts/AllCharts";
const ResponsiveGridLayout = WidthProvider(Responsive);
const Dashboard = () => {
  return (
    <div className="dashboard">
      <>
        <ResponsiveGridLayout
          isResizable={true}
          className="layout"
          autoSize={true}
          compactType={"horizontal"}
          breakpoints={{ lg: 1200, md: 996, sm: 668, xs: 480, xxs: 40 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        >
          <div
            key="1"
            className="item"
            data-grid={{ i: "a", x: 0, y: 0, w: 12, h: 3 }}
          >
            <BarChart />
          </div>
          <div
            key="2"
            className="item"
            data-grid={{ i: "b", x: 1, y: 0, w: 6, h: 3 }}
          >
            <Scatter />
          </div>

          <div
            key="3"
            className="item"
            data-grid={{ i: "c", x: 2, y: 0, w: 6, h: 3 }}
          >
            <AreaRangeChart />
          </div>
          <div
            key="4"
            className="item"
            data-grid={{ i: "d", x: 2, y: 0, w: 5.5, h: 3 }}
          >
            <BoxWhiskerPlot />
          </div>
          <div
            key="6"
            className="item"
            data-grid={{ i: "e", x: 3, y: 3, w: 5.5, h: 3 }}
          >
            <Allcharts/>
          </div>
        </ResponsiveGridLayout>
      </>
    </div>
  );
};

export default Dashboard;
