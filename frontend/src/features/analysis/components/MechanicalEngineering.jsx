import React from 'react';
import Pie from "./charts/PieChart";

const MechanicalEngineering = () => {
  return (
    <div>
      <h1>Mechanical Engineering</h1>
      <p>
        <strong>
          Based on a chosen dataset, how many people out of a specific group studying Mechanical Engineering actually pursue a career in that field?
          This is not a representation of a person's capabilities but rather reflects a dataset. 
        </strong>
      </p>
      <Pie />
    </div>
  );
};


export default MechanicalEngineering;
