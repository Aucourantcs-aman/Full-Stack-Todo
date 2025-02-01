import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    todo_ids: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "todoModel",
      default: [],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("userModel", userSchema);
export default userModel;
