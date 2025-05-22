import React from 'react';
import Bar from "./charts/SummaryChart.jsx";
import { useFetch } from '../hooks/useFetch.js';

const SummaryAnalysis = () => {
  const { data: bioData } = useFetch('/api/v1/Biology');
  const { data: mechData } = useFetch('/api/v1/MechanicalEngineers');
  const { data: businessData } = useFetch('/api/v1/Business');
  const { data: eduData } = useFetch('/api/v1/Education');
  const { data: medData } = useFetch('/api/v1/Medicine');

  const allDataLoaded = bioData && mechData && businessData && eduData && medData;

  if (!allDataLoaded) return <div>Loading summary data...</div>;

  const chartData = {
    labels: ['Mechanical Engineering', 'Business', 'Education', 'Medicine', 'Biology'],
    datasets: [
      {
        label: "Pursued profession",
        data: [
          mechData.currently_mechanical_engineers,
          businessData.currently_business_analyst,
          eduData.currently_teachers,
          medData.currently_medicine,
          bioData.currently_biologist
        ],
        backgroundColor: "rgba(218, 136, 128)"
      },
      {
        label: "Majored in field",
        data: [
          mechData.mechanical_engineering_graduates,
          businessData.major_business,
          eduData.major_education,
          medData.major_medicine,
          bioData.major_biology
        ],
        backgroundColor: "rgba(175, 122, 197)"
      }
    ]
  };

  return (
    <div>
      <h1>Summary Analysis of all career fields mentioned</h1>
      <Bar data={chartData} />
    </div>
  );
};

export default SummaryAnalysis;
