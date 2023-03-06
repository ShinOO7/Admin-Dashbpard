import BarChart from "./BarChart";
import { useState } from "react";
import "./graph.scss";

const Graph = () => {
  const revenueData = [
    {
      id: 1,
      month: "January",
      revenue: 1200,
    },
    {
      id: 2,
      month: "February",
      revenue: 2100,
    },
    {
      id: 3,
      month: "March",
      revenue: 800,
    },
    {
      id: 4,
      month: "April",
      revenue: 1600,
    },
    {
      id: 5,
      month: "May",
      revenue: 900,
    },
    {
      id: 6,
      month: "June",
      revenue: 1700,
    },
  ];

  const [chartData, setChartData] = useState({
    labels: revenueData.map((data) => data.month), //This is the label for each bar
    datasets: [
      {
        label: "Revenue Collected",
        data: revenueData.map((data) => data.revenue), //This is the value of each bar
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  });

  return (
    <div className="chart">
      <BarChart chartData={chartData} />
    </div>
  );
};

export default Graph;
