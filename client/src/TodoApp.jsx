import React, { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    // if (task.trim()) {
    //   setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    //   setTask("");
    // }
  };

  const handleToggle = (id) => {
    // setTodos(todos.map(todo =>
    //   todo.id === id ? { ...todo, done: !todo.done } : todo
    // ));
  };

  const handleDelete = (id) => {
    // setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 My ToDo List</h1>

        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 border border-gray-300 p-2 rounded-l-md"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-2 bg-gray-50 border rounded-md"
            >
              <span
                onClick={() => handleToggle(todo.id)}
                className={`flex-1 cursor-pointer ${todo.done ? "line-through text-gray-400" : ""}`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-500 hover:text-red-700 ml-4"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
