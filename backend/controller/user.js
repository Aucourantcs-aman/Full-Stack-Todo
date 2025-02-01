import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";

const userSignIn = async (req, res) => {
  const userData = req.body;
  try {
    const useralreadyexists = await userModel.findOne({
      email: userData.email,
    });
    if (!useralreadyexists) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);
      const newUserData = {
        name: userData.name,
        email: userData.email,
        password: hashedPassword,
      };
      const NewUser = await new userModel(newUserData).save();
      if (NewUser) {
        res.json({
          message: "User Signed IN Successfully",
          data: NewUser,
        });
      }
    } else {
      res.json({
        message: "User with this email already exists",
      });
    }
  } catch (error) {
    res.json({
      message: "Error while Creating User",
      error: error.message,
    });
  }
};

const userSignUp = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({
        message: "User with this email does not exist",
      });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      res.json({
        message: "Password does not match",
      });
    } else {
      res.json({
        message: "User Signed Up Successfully",
        data: user,
      });
    }
  } catch (error) {
    res.json({
      message: "Error while signing up the User",
      error: error.message,
    });
  }
};
export { userSignIn, userSignUp };
