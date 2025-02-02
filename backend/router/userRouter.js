import { Router } from "express";
import { userSignIn, userSignUp,getallUser } from "../controller/user.js";

const userRouter = Router();

userRouter.post("/signin", userSignIn);
userRouter.post("/signup", userSignUp);
userRouter.get("/alluser", getallUser);

export default userRouter;
