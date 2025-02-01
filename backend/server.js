import express from "express";
import userRouter from "./router/userRouter.js";
import connectDB from "./config/dbconnect.js";
import todoRouter from "./router/todoRouter.js";

const web = express();
const PORT = 3000;

connectDB();
web.use(express.json());
web.use("/api/user", userRouter);
web.use("/api/todo", todoRouter);

web.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on port ${PORT}`);
});
