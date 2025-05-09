import React from 'react';
import WaffleChart from "./charts/WaffleChart";


const Biology = () => {
  return (
    <div>
      <h1>Biology</h1>
      <p>
        <strong>
           <b>Out of 3921, only 3774 end up becoming Biologists</b><br/>
           This visualization focuses on how many people were able to become biologists with a biology major; however, as a biology major, one can become a health educator, biological technicians, physician liaison and environmental scientist or specialists
        </strong>
      </p>
      <WaffleChart />
    </div>
  );
};


export default Biology;
