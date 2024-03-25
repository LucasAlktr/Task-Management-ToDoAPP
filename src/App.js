import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form";
import IndexHelp from "./components/Help/IndexHelp";
import AddHelp from "./components/Help/AddHelp";
import ChangeHelp from "./components/Help/ChangeHelp";
import RemoveHelp from "./components/Help/RemoveHelp";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { useState, useEffect } from "react";
import uuid from "react-uuid";
import { Routes, Route } from "react-router-dom";
import * as database from './database'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

  (async () => {
      const data = await database.load();
      setTasks(data)
    })();
  }, []);


  const handleClearTasks = () => {
    //setTasks([]);
  };

  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    setTasks(updatedTasks);
  };

  const handleTaskRemove = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleAddTask = (description, status) => {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        description: description,
        done: status === "completed",
      },
    ]);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Tasks
              tasks={tasks}
              onStatusChange={handleStatusChange}
              onTaskRemove={handleTaskRemove}
              onClearTasks={handleClearTasks}
            />
          }
        />
        <Route path="/add" element={<Form onAddTask={handleAddTask} />} />

        <Route path="/help" element={<IndexHelp />}>
          <Route path="/help/adding" element={<AddHelp />} />
          <Route path="/help/removing" element={<RemoveHelp />} />
          <Route path="/help/changing" element={<ChangeHelp />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
