import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
cookieParser();
const isAuthenticated = async (req, res, next) => {
  const cookie = req.headers;
  console.log("cookie :" + cookie);

  try {
    // const { token } = req.headers;
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }
    const decoded = jwt.verify(token, "secretKey");
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
    req.id = decoded.userId; // Set the user ID in req object
    next();
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ message: "Authentication Error", error: error.message });
  }
};

export default isAuthenticated;
