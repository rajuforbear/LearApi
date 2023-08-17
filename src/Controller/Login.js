const { userModal } = require("../model/userModal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const user = await userModal.findOne({ email: email?.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isValidPassword = bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ useId: user._id }, "secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login Successfull", token });
  } catch (error) {
    res.status(500).json({ message: "An Error Occured" });
    console.log(error);
  }
};
module.exports = Login;
