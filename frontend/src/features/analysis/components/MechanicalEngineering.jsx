import React from 'react';
import Pie from "./charts/MechanicalEngineeringChart";
import { useFetch } from '../hooks/useFetch';


const MechanicalEngineering = () => {
  const { data, loading, error } = useFetch('/api/v1/MechanicalEngineers');

  if (loading) return <div>Loading engineering data...</div>;
  if (error) return <div>Error: {error.message || String(error)}</div>;
  

  return (
    <div>
      <h1>Mechanical Engineering</h1>
      <p>
        <strong>
          Based on a chosen dataset, {data?.currently_mechanical_engineers} out of {data?.mechanical_engineering_graduates}...
        </strong>
      </p>
      <Pie 
        sliceA={data?.currently_mechanical_engineers}
        sliceB={data?.mechanical_engineering_graduates}
      />
    </div>
  );
};

export default MechanicalEngineering;
