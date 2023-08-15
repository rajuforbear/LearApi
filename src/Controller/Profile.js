const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "/uploads" });
const app = express();
const updateProfile = (req, res) => {
  res.send("hiiyi");
};
module.exports = updateProfile;
