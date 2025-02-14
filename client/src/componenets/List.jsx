import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

const List = ({ todo, settodo }) => {
  const [edit, setedit] = useState(false);
  const [newData, setNewData] = useState("");
  const { userId } = useParams();
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const api = `http://localhost:3000/api/todo/${userId}/gettodo`;
        const res = await axios.get(api, {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
          withCredentials: true,
        });
        const data = res.data.data.todo_ids;
        // console.log(res.data.data.todo_ids);

        // Storing the TodoKiId values in an array
        const todoIds = data.map((item) => item._id);
        // console.log("TodoKiIds:", todoIds); // This will log all the _id values

        settodo(data); // Update your state with the fetched data
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    if (userId) {
      fetchTodos();
    }
  }, [userId]);
  const deleteTodo = async (TodoKiId) => {
    const api = `http://localhost:3000/api/todo/${TodoKiId}/deletetodo`;
    const res = await axios.delete(api, {
      headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      withCredentials: true,
    });
    if (res.data) {
      console.log(res.data);
    }
    // Assuming you're filtering by the _id to remove the todo from the state
    settodo(todo.filter((item) => item._id !== TodoKiId));
  };
  const UpdateTodo = async (TodoKiId) => {
    console.log(TodoKiId);
    setedit(!edit)
  };

  return (
    <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4">
      <ul className="space-y-3 list-disc">
        {todo.map((item) => (
          <li
            key={item._id}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm list-disc"
          >
            {!edit ? (
              <span className="text-gray-800 font-medium">
                {item.description}
              </span>
            ) : (
              <input
                className="text-gray-800 font-medium"
                defaultValue={item.description}
              />
            )}
            <div className="flex gap-3">
              <button
                onClick={() => UpdateTodo(item._id)}
                className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
              >
                {!edit ? "Edit" : "Save"}
              </button>
              <button
                onClick={() => deleteTodo(item._id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
