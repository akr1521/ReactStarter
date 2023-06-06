import React from "react";

const Statistics = (props) => {
  return (
    <div>
      <h4>
        Name : {props.name} Strike Rate: {props.strikerate}
      </h4>
    </div>
  );
};

export default Statistics;
