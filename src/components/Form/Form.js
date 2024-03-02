import React, { useState } from "react";
import "./form.scss";
import { FcHighPriority } from "react-icons/fc";
import { CgAdd } from "react-icons/cg";

export default function Form({ onAddTask }) {
  const [descriptionTask, setDescriptionTask] = useState("");
  const [statusTask, setStatusTask] = useState("Open");
  const [errorMessage, setErrorMessage] = useState("");

  const addTask = (event) => {
    event.preventDefault();

    if (descriptionTask !== "") {
      setErrorMessage("");

      onAddTask(descriptionTask, statusTask);
    } else setErrorMessage("Please, enter a description!");

    setDescriptionTask("");
    setStatusTask("open");
  };

  return (
    <>
      <h2 className="custom-title-form"><CgAdd /> Add a new task:</h2>
      <form action="/submit-task" onSubmit={addTask}>
        {errorMessage !== "" && (
          <div className="error-message">
            <FcHighPriority /> {errorMessage}
          </div>
        )}
        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            name="description"
            value={descriptionTask}
            onChange={(event) => setDescriptionTask(event.target.value)}
            maxLength="150"
          />
        </label>

        <label htmlFor="status">
          Status:
          <select
            id="status"
            name="status"
            value={statusTask}
            onChange={(event) => setStatusTask(event.target.value)}
          >
            <option value="open">Open</option>
            <option value="completed">Completed</option>
          </select>
        </label>

        <button type="submit">Add</button>
      </form>
    </>
  );
}
