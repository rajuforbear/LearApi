const express = require("express");

const router = express.Router();
const Registration = require("../Controller/Registration");
const Login = require("../Controller/Login");
const authenticationToken = require("../Controller/TokenAuthenticate");
const updateProfile = require("../Controller/Profile");
router.post("/register", Registration);
router.get("/login", Login);
router.get("/login", Login);
router.get("/profile", authenticationToken, updateProfile);
module.exports = router;
