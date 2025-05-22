import React from 'react';
import Bar from "./charts/MedicineChart";
import { useFetch } from '../hooks/useFetch';


const Medicine = () => {
  const { data, loading, error } = useFetch('/api/v1/Medicine');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message || String(error)}</div>;
  

  return (
    <div>
      <h1>Medicine</h1>
      <p>
        <strong>
          <b>OUT OF {data?.major_medicine}, ONLY {data?.currently_doctors} END UP BECOMING DOCTORS</b><br />
          A medicine major leads to diverse careers focused on diagnosing, treating, and preventing diseases. 
          This dataset is focused on how many people end up becoming doctors; however, with a major in medicine you can also conduct medical research, pursue pharmaceutical industry positions and careers in the healthcare administration field.
        </strong>
      </p>
      <Bar 
        chartData={{
          labels: ['Medical Professionals'],
          datasets: [
            {
              label: "Pursued a professional job in medicine",
              data: [data?.currently_medicine],
              backgroundColor: "Brown"
            },
            {
              label: "Majored in Medicine",
              data: [data?.major_medicine],
              backgroundColor: "BurlyWood"
            }
          ]
        }}
      />
    </div>
  );
};

export default Medicine;
