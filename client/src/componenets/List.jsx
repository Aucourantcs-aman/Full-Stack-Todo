import React, { useEffect } from "react";
import Delete from "./Delete";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

const List = ({ todo, settodo }) => {
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
        settodo(data); // ✅ Make sure to update state
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    if (userId) {
      fetchTodos();
    }
  }, [userId]); // ✅ Corrected dependency

  return (
    <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4">
      <ul className="space-y-3">
        {todo.map((item) => (
          <li
            key={item._id}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm"
          >
            <span className="text-gray-800 font-medium">
              {item.description}
            </span>
            <Delete id={item._id} todo={todo} settodo={settodo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
