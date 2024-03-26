import React, { useState } from "react";
import "../task.scss";

export default function Task(props) {
  const [confirmDelete, setConfirmDelete] = useState(false); 

  const handleStatusClick = () => {
    const id = props.task.id;
    const newStatus = !props.task.done;
    props.onStatusChange(id, newStatus);
  };

  const handleRemoveClick = () => {
    setConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    const id = props.task.id;
    props.onTaskRemove(id);
    setConfirmDelete(false);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
  };

  return (
    <div className="task">
      <hr />
      <h3>{props.task.description}</h3>
      <div>Id: {props.task.id}</div>
      <div>Status: {props.task.done ? "Completed" : "Open"}</div>
      <div className="col-button">
        <button className="button-action" onClick={handleStatusClick}>
          Change Status
        </button>
        <button className="button-action" onClick={handleRemoveClick}>
          Remove Task
        </button>
      </div>
      {confirmDelete && (
        <div className="confirmation-dialog">
          <p>Are you sure that you want to delete this task?</p>
          <button className="button-yes" onClick={handleConfirmDelete}>
            Yes
          </button>
          <button className="button-no" onClick={handleCancelDelete}>
            No
          </button>
        </div>
      )}
    </div>
  );
}
