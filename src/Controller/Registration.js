const bcrypt = require("bcrypt");
const { userModal } = require("../model/userModal");

const Registration = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newRegistration = new userModal({
      name,
      email: email.toLowerCase(),
      phone,
      password: hashedPassword,
    });
    await newRegistration.save();
    res.status(201).json({ message: "Registration Successfull" });
  } catch (err) {
    if (err.code === 11000) {
      if (err.keyPattern.phone) {
        res.status(409).json({ message: "Phone Already Exist" });
      } else if (err.keyPattern.email) {
        res.status(409).json({ message: "Email Already Exist" });
      } else {
        res.status(500).json({ message: "An Error Accored" });
      }
    } else
      res.status(500).json({
        message: "An Error Accored",
      });
    console.log(err);
  }
};

module.exports = Registration;
