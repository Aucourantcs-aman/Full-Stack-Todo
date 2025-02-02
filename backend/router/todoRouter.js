import { Router } from "express";
import {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  getoneTodo,
  getAllTodo
} from "../controller/todo.js";
import isAuthenticated from "../middleware/auth.js";

const todoRouter = Router();

todoRouter.get("/:id/gettodo", isAuthenticated, getTodo); // get all todo of a user - working
todoRouter.get("/alltodo",getAllTodo); //working
todoRouter.post("/createtodo", isAuthenticated, createTodo); //working
todoRouter.get("/:id/getonetodo", isAuthenticated, getoneTodo); // working
todoRouter.put("/:id/updatetodo", isAuthenticated, updateTodo); // working
todoRouter.delete("/:id/deletetodo", isAuthenticated, deleteTodo); // working
export default todoRouter;
