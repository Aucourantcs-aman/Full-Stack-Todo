import { Router } from "express";
import { userSignIn, userSignUp } from "../controller/user.js";

const userRouter = Router();

userRouter.post("/signin", userSignIn);
userRouter.post("/signup", userSignUp);

export default userRouter;
