import React from "react";
import Bar from "./charts/EducationChart.jsx";
import { useFetch } from '../hooks/useFetch';


const Education = () => {
  const { data, loading, error } = useFetch('/api/v1/Education');

  if (loading) return <div>Loading education data...</div>;
  if (error) return <div>Error: {error.message || String(error)}</div>;
  

  return (
    <div>
      <h1>Education</h1>
      <p>
        <strong>
          <p>Total Education majors: {data?.major_education}</p>
          <p>Actual Teacher: {data?.currently_teachers}</p>
          <p>Out of {data?.major_education}, only {data?.currently_teachers} end up becoming teachers</p>
        </strong>
      </p>
      <Bar />
    </div>
  );
};

export default Education;
