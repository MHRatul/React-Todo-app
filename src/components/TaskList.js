import React, { useState } from "react";

const TaskList = ({ tasks, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleEdit = (id, text) => {
    setIsEditing(id);
    setEditedText(text);
  };

  const handleSave = (id) => {
    editTask(id, editedText);
    setIsEditing(null);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={task.id}
          className="flex justify-between items-center mb-2 p-2 border-b"
        >
          {isEditing === task.id ? (
            <>
              <input
                type="text"
                className="flex-grow border p-2 rounded-md"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button
                className="bg-orange-500 text-white px-2 py-1 ml-2 rounded-md"
                onClick={() => handleSave(task.id)}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span className="flex-grow">
                <strong>{index + 1}. </strong>
                {task.text}
              </span>
              <button
                className="bg-orange-500 text-white px-2 py-1 ml-2 rounded-md"
                onClick={() => handleEdit(task.id, task.text)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 ml-2 rounded-md"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
