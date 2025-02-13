import React from "react";
import generateUniqueId from "generate-unique-id";

const Add = ({ inputValue, setinputValue, todo, settodo }) => {
  const AddTodo = () => {
    const todotext = inputValue;
    const id = generateUniqueId();
    const newArray = [...todo, { _id: id, description: todotext }];
    settodo(newArray);
    // console.log("Todo Added : ", newArray);
    setinputValue("");
  };
  return (
    <button
      onClick={AddTodo}
      className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-full shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 transition-all"
    >
      Add
    </button>
  );
};

export default Add;
