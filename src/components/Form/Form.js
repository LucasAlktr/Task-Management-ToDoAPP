import React, { useState } from "react";
import "./form.scss";
import { FcHighPriority } from "react-icons/fc";
import { CgAdd } from "react-icons/cg";
import { Saving } from "../UserMessages/saving";
import * as database from "../../database";
import { FcOk } from "react-icons/fc";

export default function Form({ onAddTask }) {
  const [descriptionTask, setDescriptionTask] = useState("");
  const [statusTask, setStatusTask] = useState("Open");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [savedSuccessfully, setSavedSuccessfully] = useState(false);

  const addTask = async (event) => {
    event.preventDefault();

    if (descriptionTask !== "") {
      setErrorMessage("");
      setIsSaving(true);

      try {
        const docRef = await database.save({
          description: descriptionTask,
          status: statusTask,
        });
        onAddTask(docRef.id, descriptionTask, statusTask);

        setSavedSuccessfully(true);
      } catch (error) {
        console.error("Failed to save task:", error);
      } finally {
        setIsSaving(false);
        setTimeout(() => {
          setSavedSuccessfully(false);
        }, 3000);
      }
    } else setErrorMessage("Please, enter a description!");
    setIsSaving(true);

    setDescriptionTask("");
    setStatusTask("open");
    setIsSaving(false);
  };

  return (
    <>
      <h2 className="custom-title-form">
        <CgAdd /> Add a new task:
      </h2>
      <form action="/submit-task" onSubmit={addTask}>
        {errorMessage !== "" && (
          <div className="error-message">
            <FcHighPriority /> {errorMessage}
          </div>
        )}
        {savedSuccessfully && (
          <div className="success-message">
            Task Saved Successfully! <FcOk />
          </div>
        )}
        {isSaving ? (
          <Saving />
        ) : (
          <>
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
                <option value="Open">Open</option>
                <option value="Completed">Completed</option>
              </select>
            </label>

            <button type="submit">Add</button>
          </>
        )}
      </form>
    </>
  );
}
