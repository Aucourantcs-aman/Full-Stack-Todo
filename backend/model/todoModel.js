import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel",
      // required: true,
    },
  },
  { timestamps: true }
);
const todoModel = mongoose.model("todoModel", todoSchema);
export default todoModel;
