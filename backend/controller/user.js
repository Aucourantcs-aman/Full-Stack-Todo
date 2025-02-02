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
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user._id }, "secretKey", {
      expiresIn: "7d",
    });

    // Send token in HTTP-only cookie
    res.cookie("token", token, { httpOnly: true }).status(200).json({
      message: "User logged in successfully",
      data: user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while logging in the user",
      error: error.message,
    });
  }
};
const getallUser = async (req, res) => {
  try {
    const allUser = await userModel.find();
    if (allUser) {
      res.json({
        message: "All User Fetched Successfully",
        data: allUser,
      });
    }
  } catch (error) {
    res.json({
      message: "Error while getting all todo",
      error: error.message,
    });
  }
};
const logoutUser = async (req,res) => {
  try {
    const userId = req.id;
    const logoutUser = await userModel.findByIdAndDelete(userId);
    if (logoutUser) {
      req.headers = undefined;
      res.json({
        message: "User logged out successfully",
      });
    }
  } catch (error) {
    res.json({
      message: "Error while getting all todo",
      error: error.message,
    });
  }
};
export { userSignIn, userSignUp, getallUser, logoutUser };
