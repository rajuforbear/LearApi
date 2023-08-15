const { default: mongoose } = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  phone: {
    type: Number,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    default: "default.jpg",
  },
});

module.exports = mongoose.model("Registration", userSchema);
