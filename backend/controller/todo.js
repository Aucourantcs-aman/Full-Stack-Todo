import todoModel from "../model/todoModel.js";
import userModel from "../model/userModel.js";
const createTodo = async (req, res) => {
  try {
    const todoData = req.body;

    // Ensure `req.id` is set from isAuthenticated middleware
    if (!req.id) {
      return res.status(400).json({ message: "User ID missing from request" });
    }

    const newTodo = await new todoModel({
      ...todoData,
      user_id: req.id,
    }).save();

    if (newTodo) {
      const updatedUser = await userModel.findByIdAndUpdate(
        req.id,
        { $push: { todo_ids: newTodo._id } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(201).json({
        message: "Todo Created Successfully",
        data: newTodo,
      });
    }
  } catch (error) {
    res.status(500).json({
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
const getAllTodo = async(req,res)=>{
  try {
    const alltodo = await todoModel.find()
    if(alltodo){
      res.json({
        message:"All Todo Fetched Successfully",
        data:alltodo
      })
    }
  } catch (error) {
    res.json({
      message: "Error while getting all todo",
      error: error.message,
    })
  }
}
export { createTodo, updateTodo, deleteTodo, getTodo, getoneTodo,getAllTodo };
