import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ['Mechanical Engineering', 'Business', 'Education', 'Medicine', 'Biology'],
  datasets: [
    {
      label: "Pursued a professional job in their field",
      data: [373, 3858, 3886, 3888, 3774],
      backgroundColor: "rgba(218, 136, 128)"
    },
    {
      label: "Majored in that field of study",
      data: [3875, 3821, 3896, 3949, 3921],
      backgroundColor: "rgba(175, 122, 197)"
    },

  ],

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
