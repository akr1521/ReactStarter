import React, { useEffect, useState } from "react";
import Task from "./Task";

const getData = () => {
  const data = localStorage.getItem("tasks");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const TaskList = () => {
  const [tasks, setTasks] = useState(getData());
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  function handleTask(e) {
    e.preventDefault();
    let taskName = {
      task,
      date,
      status,
    };
    setTasks([...tasks, taskName]);
    setTask("");
    setDate("");
    setStatus("");
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="wrapper">
      <h1> Todo </h1>
      <div className="main">
        <div className="form-container">
          <form className="form-group" onSubmit={handleTask}>
            <label> Task </label>
            <input
              type="text"
              className="form-control"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <br />
            <br />
            <label> Date </label>
            <input
              type="text"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <br />
            <br />
            <label> Status</label>
            <input
              type="text"
              className="form-control"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <br />
            <br />

            <button type="submit" className="btn btn-success btn-md">
              Add
            </button>
          </form>
        </div>

        <div className="view-container">
          <Task task={tasks} />
        </div>
      </div>
    </div>
  );
};

export default TaskList;
