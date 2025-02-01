import express from "express";
import userRouter from "./router/userRouter.js";
import connectDB from "./config/dbconnect.js";
import todoRouter from "./router/todoRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const web = express();
const PORT = 3000;

connectDB();
web.use(express.json());
web.use("/api/user", userRouter);
web.use("/api/todo", todoRouter);
web.use(cookieParser());
web.use(
  cors({
    origin: "http://localhost:3000", // Change this to your frontend URL
    credentials: true, // Allow sending cookies
  })
);

web.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on port ${PORT}`);
});
