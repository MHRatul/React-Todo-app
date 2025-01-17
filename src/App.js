import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, updatedText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: updatedText } : task))
    );
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">React To-Do App</h1>
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      </div>
    </div>
  );
}

export default App;
