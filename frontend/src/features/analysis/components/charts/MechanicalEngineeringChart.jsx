import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const sliceA = { size: 373, color: 'blue' };
  const sliceB = { size: 3875, color: 'green' };
  const total = sliceA.size + sliceB.size;

  const data = {
    labels: [
      `Mechanical Engineers (${((sliceA.size / total) * 100).toFixed(2)}%)`,
      `Majored Students (${((sliceB.size / total) * 100).toFixed(2)}%)`
    ],
    datasets: [{
      data: [sliceA.size, sliceB.size],
      backgroundColor: [sliceA.color, sliceB.color],
      borderWidth: 0
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value} people (${((value / total) * 100).toFixed(2)}%)`;
          }
        }
      }
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto' }}>
      <Pie data={data} options={options} />
      <div style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: '20px',
              height: '20px',
              backgroundColor: sliceA.color,
              marginRight: '10px'
            }} />
            <span>
              People who actually did something related to that field: {sliceA.size} ({((sliceA.size / total) * 100).toFixed(2)}%)
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: '20px',
              height: '20px',
              backgroundColor: sliceB.color,
              marginRight: '10px'
            }} />
            <span>
              People who majored in Mechanical Engineering: {sliceB.size} ({((sliceB.size / total) * 100).toFixed(2)}%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
