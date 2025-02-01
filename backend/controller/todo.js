import todoModel from "../model/todoModel.js";
import userModel from "../model/userModel.js";
const createTodo = async (req, res) => {
  const todoData = req.body;
  try {
    const newTodo = await new todoModel(todoData).save();
    if (newTodo) {
      await userModel.findByIdAndUpdate(
        todoData.user_id,
        {
          $push: { todo_ids: newTodo._id },
        },
        { new: true }
      );
      res.json({
        message: "Todo Created Successfully",
        data: newTodo,
      });
    }
  } catch (error) {
    res.json({
      message: "Error while creating todo",
      error: error.message,
    });
  }
};
const updateTodo = async (req, res) => {
  const newtodoData = req.body;
  try {
    const newTodo = await todoModel.findByIdAndUpdate(
      newtodoData._id,
      {
        title: newtodoData.title,
        description: newtodoData.description,
      },
      { new: true }
    );
    res.json({
      message: "Todo Updated Successfully",
      data: newTodo,
    });
  } catch (error) {
    res.json({
      message: "Error while updating todo",
      error: error.message,
    });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const todotobedeleted = await todoModel.findByIdAndDelete(req.params.id);
    if (todotobedeleted) {
      await userModel.findByIdAndUpdate(
        todotobedeleted.user_id,
        { $pull: { todo_ids: todotobedeleted._id } },
        { new: true }
      );
      res.json({
        message: "Todo Deleted Successfully",
      });
    } else {
      res.json({
        message: "Todo not found",
      });
    }
  } catch (error) {
    res.json({
      message: "Error while deleting todo",
      error: error.message,
    });
  }
};
const getTodo = async (req, res) => {
  try {
    const user = await userModel
      .findById(req.params.id)
      .populate("todo_ids")
      .exec();
    res.json({
      message: "Todo Fetched Successfully",
      data: user,
    });
  } catch (error) {
    res.json({
      message: "Error while getting all todo",
      error: error.message,
    });
  }
};
const getoneTodo = async (req, res) => {
  try {
    const todo = await todoModel.findById(req.params.id);
    res.json({
      message: "Todo Fetched Successfully",
      data: todo,
    });
  } catch (error) {
    res.json({
      message: "Error while getting one todo",
      error: error.message,
    });
  }
};
export { createTodo, updateTodo, deleteTodo, getTodo, getoneTodo };
