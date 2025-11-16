import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: "Unauthorized access" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.json({ success: false, message: "Unauthorized access" });
    }

    req.user = decoded;
    next();

  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

export default authUser;
