import { Router } from "express";
import { userSignIn, userSignUp,getallUser, logoutUser } from "../controller/user.js";
import isAuthenticated from "../middleware/auth.js";
const userRouter = Router();

userRouter.post("/signin", userSignIn);
userRouter.post("/signup", userSignUp);
userRouter.get("/alluser", getallUser);
userRouter.get("/logoutuser",isAuthenticated, logoutUser)

export default userRouter;
