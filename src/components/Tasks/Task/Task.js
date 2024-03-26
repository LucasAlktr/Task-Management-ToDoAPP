import React from "react";
import "../task.scss";

export default function Task(props) {
  const handleStatusClick = () => {
    const id = props.task.id;
    const newStatus = !props.task.done;

    props.onStatusChange(id, newStatus);
  };

  const handleRemoveClick = () => {
    const id = props.task.id;
    props.onTaskRemove(id);
  };

  return (
    <div className="task">
      <hr />
      <h3>{props.task.description}</h3>
      <div>Id: {props.task.id}</div>
      <div>Status: {props.task.status}</div>
      <div className="col-button">
        <button className="button-action" onClick={handleStatusClick}>
          Change Status
        </button>
        <button className="button-action" onClick={handleRemoveClick}>
          Remove Task
        </button>
      </div>
    </div>
  );
}
