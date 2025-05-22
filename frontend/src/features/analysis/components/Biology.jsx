import React from 'react';
import WaffleChart from "./charts/BiologyChart";
import { useFetch } from '../hooks/useFetch';


const Biology = () => {
  const { data, loading, error } = useFetch('/api/v1/Biology');

  if (loading) return <div>Loading biology data...</div>;
  if (error) return <div>Error: {error.message || String(error)}</div>;
  

  return (
    <div>
      <h1>Biology</h1>
      <p>
        <strong>
          <b>Out of {data?.major_biology}, only {data?.currently_biologist} end up becoming Biologists</b><br/>
          This visualization focuses on how many people were able to become biologists with a biology major...
        </strong>
      </p>
      <WaffleChart 
        values={[data?.currently_biologist, data?.major_biology]}
        labels={[
          "People who actually became Biologists",
          "People who majored in Biology"
        ]}
      />
    </div>
  );
};

export default Biology;
