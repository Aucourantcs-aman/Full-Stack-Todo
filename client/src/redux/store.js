import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import todoReducer from "./slices/todoSlice";

const store = configureStore({
  reducer: { auth: authReducer},
});
export default store;
