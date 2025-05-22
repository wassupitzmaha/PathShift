import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StackedBarChart = ({ data, options }) => (
  <div style={{ maxWidth: 600, margin: "0 auto" }}>
    <Bar data={data} options={options} />
  </div>
);

export default StackedBarChart;
