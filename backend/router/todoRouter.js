import { Router } from "express";
// import createTodo from "../controller/todo.js";
// import updatetodo from "../controller/todo.js";
// import deleteetodo from "../controller/todo.js";
import {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todo.js";

const todoRouter = Router();

todoRouter.get("/gettodo", getTodo);
todoRouter.post("/createtodo", createTodo);
todoRouter.patch("/updatetodo", updateTodo);
todoRouter.delete("/deletetodo", deleteTodo);
export default todoRouter;
