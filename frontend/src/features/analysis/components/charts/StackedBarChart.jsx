import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: "1", 
  datasets: [
    {
      label: "Pursued a professional job in medicine",
      data: [3888],
      backgroundColor: "blue"
    },
    {
      label: "Majored in Medicine",
      data: [3949],
      backgroundColor: "green"
    }
  ]
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: "Stacked Bar Chart Example" }
  },
  scales: {
    x: { stacked: true },
    y: { stacked: true }
  }
};

const StackedBarChart = () => (
  <div style={{ maxWidth: 600, margin: "0 auto" }}>
    <Bar data={data} options={options} />
  </div>
);

export default StackedBarChart;
