import React from "react";
import Waffle from './charts/BusinessChart.jsx';
import { useFetch } from '../hooks/useFetch';


const TimeTrends = () => {
  const { data, loading, error } = useFetch('/api/v1/Business');

  if (loading) return <div>Loading business data...</div>;
  if (error) return <div>Error: {error.message || String(error)}</div>;
  

  return (
    <div>
      <h1>Business Outcomes</h1>
      <p>
        <strong>
          Total Business Majors: {data?.major_business}<br />
          Actual Business Analyst: {data?.currently_business_analyst}<br />
          Out of {data?.major_business}, only {data?.currently_business_analyst} end up becoming business analysts
        </strong>
      </p>
      <Waffle 
        values={[data?.currently_business_analyst, data?.major_business]}
      />
    </div>
  );
};

export default TimeTrends;
