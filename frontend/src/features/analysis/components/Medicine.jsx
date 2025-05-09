import React from 'react';
import Bar from "./charts/StackedBarChart";


const Medicine = () => {
  return (
    <div>
      <h1>Medicine</h1>
      <p>
        <strong>
          <b>OUT OF 3949, ONLY 3888 END UP BECOMING DOCTORS</b><br />

          A medicine major leads to diverse careers focused on diagnosing, treating, and preventing diseases. 
          This dataset is focused on how many people end up becoming doctors; however, with a major in medicine you can also conduct medical research, pursue pharmaceutical industry postions and careers in the healthcare administration field.

        </strong>
      </p>
      <Bar></Bar>
    </div>
  );
};


export default Medicine;
