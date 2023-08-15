const jwt = require("jsonwebtoken");
const userModal = require("../model/userModal");
const authenticationToken = async (req, res) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decodeToken = jwt.verify(token, "secret-key");
    const user = await userModal.findById(decodeToken.useId);
    if (!user) {
      return res.status(401).json({ message: "No user found" });
    }
    next();
  } catch (err) {
    res.status(403).json({ message: "invalid token" });
    console.log(err);
  }
};
module.exports = authenticationToken;
