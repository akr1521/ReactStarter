import logo from "./logo.svg";
import "./App.css";
import { randomStyle } from "./App.module.css";
import Team from "./Teams";
import { ReactPropTypes } from "react";
import { Task } from "./Task";
import { useState } from "react";
import Board from "./Board";
import Content from "./Content";

function App() {
  return (
    <div>
      <h1> TIC TAC TOE </h1>
      <Board />
      <Content />
    </div>
  );
}

export default App;
