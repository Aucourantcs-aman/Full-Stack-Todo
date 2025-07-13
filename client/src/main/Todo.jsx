import React, { useState, useEffect } from "react";
import Input from "../componenets/Input";
import Add from "../componenets/Add";
import List from "../componenets/List";
import { useParams } from "react-router-dom";
import axios from "axios";

const Todo = () => {
  const { userId } = useParams();
  const [inputValue, setinputValue] = useState("");
  const [todo, settodo] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/todo/todos?page=${page}&limit=5`, {
        withCredentials: true,
      });
      settodo(res.data.todos);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [page]);

  return (
    <>
      <h1 className="text-4xl font-semibold text-center p-6 text-gray-800">
        Todo Items
      </h1>

      <div className="flex flex-col items-center gap-4">
        {/* Input and Add button */}
        <div className="flex items-center gap-3 w-full max-w-lg">
          <Input inputValue={inputValue} setinputValue={setinputValue} />
          <Add inputValue={inputValue} setinputValue={setinputValue} todo={todo} settodo={settodo} />
        </div>

        {/* Todo List */}
        <div className="w-full max-w-lg">
          <List todo={todo} settodo={settodo} />
        </div>

        {/* Pagination Controls */}
        <div className="flex gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
