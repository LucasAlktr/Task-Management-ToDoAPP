import React, { useState } from "react";
import Task from "./Task/Task";
import "./task.scss";
import { FcIpad } from "react-icons/fc";

export default function Tasks({
  tasks,
  onStatusChange,
  onTaskRemove,
  onClearTasks,
  isLoaded,
}) {
  const [confirmClearAll, setConfirmClearAll] = useState(false);

  const handleClearAllClick = () => {
    setConfirmClearAll(true);
  };

  const handleConfirmClearAll = () => {
    onClearTasks();
    setConfirmClearAll(false);
  };

  const handleCancelClearAll = () => {
    setConfirmClearAll(false);
  };

  return (
    <>
      <h2>
        <div className="title-tasks">
          <FcIpad />
          These are the tasks:
        </div>
      </h2>
      {isLoaded ? (
        tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              key={index}
              task={task}
              onStatusChange={onStatusChange}
              onTaskRemove={onTaskRemove}
            />
          ))
        ) : (
          <p>There are no tasks on the list</p>
        )
      ) : (
        <p>Loading</p>
      )}
      <hr />
      <div className="task">
        <hr />
        <button className="button-action" onClick={handleClearAllClick}>
          Clear Tasks
        </button>
      </div>
      {confirmClearAll && (
        <div className="confirmation-dialog">
          <p>Are you sure that you want to delete ALL tasks?</p>
          <button className="button-yes-all" onClick={handleConfirmClearAll}>Yes</button>
          <button className="button-no-all" onClick={handleCancelClearAll}>No</button>
        </div>
      )}
    </>
  );
}
