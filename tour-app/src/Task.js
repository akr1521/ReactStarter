import React from "react";
import PropTypes from "prop-types";

export function Task(props) {
  return (
    <>
      <h4> Task: {props.name}</h4>
      <h4> Duration: {props.duration}</h4>
      <h4> Start Time : {props.startTime}</h4>
      <h4> End Time: {props.endTime}</h4>
    </>
  );
}

Task.propTypes = {
  name: PropTypes.string,
  duration: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
};

export default Task;
