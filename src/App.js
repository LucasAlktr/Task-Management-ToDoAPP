import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form";
import { useState } from "react";
import uuid from "react-uuid";

function App() {

  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      title: 'Walk the Dod',
      status: false
    },
    {
      id: uuid(),
      title: 'Wash the car',
      status: false
    },
    {
      id: uuid(),
      title: 'Finish the lab',
      status: false
    }
  ]);

  const handleClearTasks = () => {
    setTasks([]);
  }

  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    setTasks(updatedTasks);
  }

  const handleTaskRemove = (id) => {
    const filteredTasks = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(filteredTasks);
  }

  const handleAddTask = (description, status) => {
    setTasks([...tasks, {
      id: uuid(), description: description, done: status === 'completed'
    }]);

  }

  return (
    <>
      <Header />
      <Tasks
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onTaskRemove={handleTaskRemove}
        onClearTasks={handleClearTasks}
      />
      <Form 
        onAddTask = {handleAddTask}
      />
    </>
  );
}

export default App;
