import express from 'express';
import userRouter from './router/userRouter.js';
import connectDB from './config/dbconnect.js';
import todoRouter from './router/todoRouter.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { configDotenv } from 'dotenv';

configDotenv();

const web = express();
web.use(cookieParser());
// const PORT = 3000;
const port = process.env.PORT;

connectDB();
web.use(express.json());
web.use(
  cors({
    origin: `${process.env.REACT_APP_API_URL}`, // Change this to your frontend URL
    // origin: "http://localhost:5173", // Change this to your frontend URL
    credentials: true, // Allow sending cookies
    httpOnly: true,
    methods: 'GET,POST,PUT,DELETE,PATCH',
  }),
);
web.use('/api/user', userRouter);
web.use('/api/todo', todoRouter);
// web.use(cors());

web.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on port ${port}`);
});
