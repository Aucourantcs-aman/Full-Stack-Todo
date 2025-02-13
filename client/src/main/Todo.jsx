import React, { useState } from "react";
import Input from "../componenets/Input";
import Add from "../componenets/Add";
import List from "../componenets/List";
import { useParams } from 'react-router-dom';

const Todo = () => {
  // const { userId } = useParams();
  const [inputValue, setinputValue] = useState("");
  const [todo, settodo] = useState([]);
  // useEffect(() => {
  //   console.log('User ID:', userId);
  //   // You can use this userId to fetch user-specific data if needed
  // }, [userId]);
  return (
    <>
      <h1 className="text-4xl font-semibold text-center p-6 text-gray-800">
        {/* Todo of user : {userId}
        todo */}
      </h1>

      <div className="flex flex-col items-center gap-4">
        {/* Input and Add button in a row */}
        <div className="flex items-center gap-3 w-full max-w-lg">
          <Input
            className="flex-1"
            inputValue={inputValue}
            setinputValue={setinputValue}
          />
          <Add
            inputValue={inputValue}
            setinputValue={setinputValue}
            todo={todo}
            settodo={settodo}
          />
        </div>

        {/* List container */}
        <div className="w-full max-w-lg">
          <List todo={todo} settodo={settodo} />
        </div>
      </div>
    </>
  );
};

export default Todo;
