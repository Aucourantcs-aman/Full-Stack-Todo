import React from "react";

const Delete = ({ id, todo, settodo }) => {
  const deleteTodo = (id) => {
    settodo(todo.filter((item) => item._id !== id));
  };

  return (
    <button
      onClick={() => deleteTodo(id)}
      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
    >
      Delete
    </button>
  );
};

export default Delete;
