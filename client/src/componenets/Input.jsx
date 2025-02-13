import React from "react";

const Input = ({ inputValue, setinputValue }) => {
  return (
    <input
      type="text"
      placeholder="Enter the Todo Item"
      onChange={(e) => {
        setinputValue(e.target.value);
      }}
      value={inputValue}
      className="w-full max-w-lg py-3 px-5 bg-white text-black font-light border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
    />
  );
};

export default Input;
