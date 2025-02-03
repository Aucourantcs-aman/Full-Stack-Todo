import React from "react";
import Input from "../componenets/Input";
import Add from "../componenets/Add";
import List from "../componenets/List";

const Todo = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center p-6 text-gray-800">
        Todo
      </h1>

      <div className="flex flex-col items-center gap-4">
        {/* Input and Add button in a row */}
        <div className="flex items-center gap-3 w-full max-w-lg">
          <Input className="flex-1" />
          <Add />
        </div>

        {/* List container */}
        <div className="w-full max-w-lg">
          <List />
        </div>
      </div>
    </>
  );
};

export default Todo;
