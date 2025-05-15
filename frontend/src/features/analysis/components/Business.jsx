import React from "react";
import Waffle from './charts/BusinessChart.jsx'
const TimeTrends = () => {
  return (
    <div>
      <h1>Business Outcomes</h1>
      <p>
        <strong>
          Total Business Majors: 3921<br />

          Actual Business Analyst: 3858<br />
          Out of 3921, only 3858 end up becoming business analysts
        </strong>
      </p>
      <Waffle />
    </div>
  );
};

export default TimeTrends;