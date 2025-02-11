import express from "express";
import userRouter from "./router/userRouter.js";
import connectDB from "./config/dbconnect.js";
import todoRouter from "./router/todoRouter.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const web = express();
web.use(cookieParser());
const PORT = 3000;

connectDB();
web.use(express.json());
web.use(
  cors({
    origin: "http://localhost:5173", // Change this to your frontend URL
    credentials: true, // Allow sending cookies
    httpOnly: true,
    methods: "GET,POST,PUT,DELETE",
  })
);
web.use("/api/user", userRouter);
web.use("/api/todo", todoRouter);
// web.use(cors());

web.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on port ${PORT}`);
});
