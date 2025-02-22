import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
        state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setTodo: (state, action) => {
      state.todos = action.payload;
    },
  },
});
export default todoSlice.reducer;

export const { addTodo, removeTodo, setTodo } = todoSlice.actions;
