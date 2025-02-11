import React from "react";
import Delete from "./Delete";

const List = ({ todo, settodo }) => {
  return (
    <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4">
      <ul className="space-y-3">
        <li className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm">
          <span className="text-gray-800 font-medium">First Task</span>
          <Delete />
        </li>

        <li className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md shadow-sm">
          <span className="text-gray-800 font-medium">Second Task</span>
          <Delete />
        </li>
      </ul>
    </div>
  );
};

export default List;
