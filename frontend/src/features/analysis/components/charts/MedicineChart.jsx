import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StackedBarChart = ({ chartData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: { 
        position: "top",
        labels: {
          font: {
            size: 14
          }
        }
      },
      title: { 
        display: true, 
        text: "Medical Career Outcomes",
        font: {
          size: 18
        }
      }
    },
    scales: {
      x: { 
        stacked: true,
        ticks: {
          font: {
            size: 14
          }
        }
      },
      y: { 
        stacked: true,
        ticks: {
          font: {
            size: 14
          },
          callback: (value) => `${value} professionals`
        }
      }
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto" }}>
      <Bar 
        data={chartData} 
        options={options} 
        height={400}
      />
    </div>
  );
};

export default StackedBarChart;
