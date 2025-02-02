import { Router } from "express";
// import createTodo from "../controller/todo.js";
// import updatetodo from "../controller/todo.js";
// import deleteetodo from "../controller/todo.js";
import {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  getoneTodo,
  getAllTodo,
} from "../controller/todo.js";
import isAuthenticated from "../middleware/auth.js";

const todoRouter = Router();

todoRouter.get("/gettodo", isAuthenticated, getTodo);
todoRouter.get("/alltodo",getAllTodo);
todoRouter.post("/createtodo", isAuthenticated, createTodo);
todoRouter.get("/:id/getonetodo", isAuthenticated, getoneTodo);
todoRouter.put("/:id/updatetodo", isAuthenticated, updateTodo);
todoRouter.delete("/:id/deletetodo", isAuthenticated, deleteTodo);
export default todoRouter;
