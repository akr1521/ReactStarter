import React from "react";

const style = {
  background: "lightblue",
  border: "2px  solid   dardblue",
  borderRadius: "2px",
  fontWeight: "800",
  outline: "none",
  
  cursor: "pointer",
};

const Square = ({ value, onClick }) => {
  const onOver = () => {
    console.log(" Seems the event is working ");
  };
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
