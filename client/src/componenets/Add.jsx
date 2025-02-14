import React from "react";
import generateUniqueId from "generate-unique-id";
import axios from "axios";
import Cookie from "js-cookie";

const Add = ({ inputValue, setinputValue, todo, settodo }) => {
  const AddTodo = async () => {
    try {
      const todotext = inputValue.trim();
      if (!todotext) {
        alert("Please enter a todo description.");
        return;
      }

      const id = generateUniqueId();
      const api = "http://localhost:3000/api/todo/createtodo"; // URL can be modified dynamically if needed

      // Retrieve the token from cookies
      const token = Cookie.get("token");

      if (!token) {
        alert("You must be logged in to add a todo.");
        return;
      }

      // Make the API call
      const res = await axios.post(api, { description: todotext }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,  // Include cookies in the request
      });
      

      if (res.data) {
        // If the API response is successful, add the new todo to the state
        const newArray = [...todo, { _id: id, description: todotext }];
        settodo(newArray);
        setinputValue(""); // Reset input field
      } else {
        console.error(
          "Failed to add todo:",
          res.data.message || "Unknown error"
        );
        alert("Failed to add todo. Please try again.");
      }
    } catch (error) {
      console.error("Error adding todo:", error.message);
      alert("An error occurred while adding your todo. Please try again.");
    }
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
