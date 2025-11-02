import { Router } from 'express';
import {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  getoneTodo,
  getAllTodo,
} from '../controller/todo.js';
import isAuthenticated from '../middleware/auth.js';
import todoModel from '../model/todoModel.js';

const todoRouter = Router();

todoRouter.get('/:id/gettodo', isAuthenticated, getTodo); // get all todo of a user - working
todoRouter.get('/alltodo', getAllTodo); //working
todoRouter.post('/createtodo', isAuthenticated, createTodo); //working
todoRouter.get('/:id/getonetodo', isAuthenticated, getoneTodo); // working
todoRouter.put('/:id/updatetodo', isAuthenticated, updateTodo); // working
todoRouter.delete('/:id/deletetodo', isAuthenticated, deleteTodo); // working
todoRouter.get('/todos', async (req, res) => {
  try {
    // console.log("REQ: ", req.query);

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const todos = await todoModel.find().skip(skip).limit(limit).sort({ createdAt: -1 });
    // console.log("Tdods: ",todos);

    const total = await todoModel.countDocuments();

    res.json({
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      todos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something went wrong in Pagination' });
  }
});

export default todoRouter;
