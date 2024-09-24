const { JWT_SECRET } = env(JWT_SECRET);
import webToken from "jsonwebtoken";
const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({});
  }
  const token = authHeader.split(" ")[1];
  try {
    const verified = webToken.verify(token, JWT_SECRET);
    req.userId = verified.userId;
    next();
  } catch (err) {
    return res.status(400).json({
      msg: "something went wrong!",
    });
  }
};

module.exports = {
  authMiddleware,
};
