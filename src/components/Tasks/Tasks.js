import Task from "./Task/Task";
import "./task.scss";
import { FcIpad } from "react-icons/fc";

export default function Tasks({
  tasks,
  onStatusChange,
  onTaskRemove,
  onClearTasks,
}) {
  return (
    <>
      <h2>
        <div className="title-tasks">
          <FcIpad />
        
        These are the tasks:
        </div>
      </h2>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onStatusChange={onStatusChange}
          onTaskRemove={onTaskRemove}
        />
      ))}
      <hr />
      <div className="task">
        <button className="button-action" onClick={onClearTasks}>
          Clear Tasks
        </button>
      </div>
    </>
  );
}
