import React from "react";
import Bar from "./charts/EducationChart.jsx"

const Education = () => {
  return (
    <div>
      <h1>Education</h1>
      <p>
        <strong>
          <p>
            Total Education majors: 3896
          </p>
          <p>
            Actual Teacher: 3886
          </p>
          <p>
            Out of 3896, only 3886 end up becoming teachers
          </p>
        </strong>
      </p>
      <Bar />
    </div>
  );
};

export default Education;