import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form";
import IndexHelp from "./components/Help/IndexHelp";
import AddHelp from "./components/Help/AddHelp";
import ChangeHelp from "./components/Help/ChangeHelp";
import RemoveHelp from "./components/Help/RemoveHelp";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "./components/UserMessages/loading";
import * as database from "./database";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await database.load();
        setTasks(data);
      } catch (error) {
        console.error("Failed to load tasks:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleClearTasks = () => {
    //setTasks([]);
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await database.updateTask(id, {
        status: newStatus ? "Completed" : "Open",
      });

      setTasks(
        tasks.map((task) =>
          task.id === id
            ? {
                ...task,
                done: newStatus,
                status: newStatus ? "Completed" : "Open",
              }
            : task
        )
      );
    } catch (error) {
      console.error("Failed to update task status:", error);
    }
  };

  const handleTaskRemove = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleAddTask = (id, description, status) => {
    setTasks([
      ...tasks,
      {
        id: id,
        description: description,
        status: status,
      },
    ]);
  };

  return (
    <>
      <Header />

      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Tasks
                tasks={tasks}
                onStatusChange={handleStatusChange}
                onTaskRemove={handleTaskRemove}
                onClearTasks={handleClearTasks}
                isLoaded={!isLoading}
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
      )}
    </>
  );
}

export default App;
