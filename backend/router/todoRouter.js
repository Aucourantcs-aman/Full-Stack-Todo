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
} from "../controller/todo.js";

const todoRouter = Router();

todoRouter.get("/gettodo", getTodo);
todoRouter.get("/:id/getonetodo", getoneTodo);
todoRouter.post("/:id/createtodo", createTodo);
todoRouter.patch("/:id/updatetodo", updateTodo);
todoRouter.delete("/:id/deletetodo", deleteTodo);
export default todoRouter;
