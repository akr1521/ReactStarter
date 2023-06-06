import React from "react";
import Square from "./Square";
import { getByDisplayValue } from "@testing-library/react";

const boxStyle = {
  border: "4px  solid darkblue",
  borderRadius: "10px",
  width: "250px",
  height: "250px",
  margin: "0 auto",
  display: "grid",
  gridTemplateRows: "repeat(3, 1fr)",
  grdTemplateColumns: "repeat(3,1fr)",
};

const Board = ({ squares, onClick }) => (
  <div style={boxStyle}>
    <Square value="1" onClick={() => onClick(" checkig value")} />
    <Square value="1" onClick={() => onClick(" checkig value")} />
    <Square value="1" onClick={() => onClick(" checkig value")} />
    <Square value="1" onClick={() => onClick(" checkig value")} />
    <Square value="1" onClick={() => onClick(" checkig value")} />
    <Square value="1" onClick={() => onClick(" checkig value")} />
    <Square value="1" onClick={() => onClick(" checkig value")} />
    <Square value="1" onClick={() => onClick(" checkig value")} />
    <Square value="1" onClick={() => onClick(" checkig value")} />
    <Square value="1" onClick={() => onClick(" checkig value")} />
  </div>
);

export default Board;
