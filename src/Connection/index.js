const mongoose = require("mongoose");
const { mongourl } = require("../constants");
const Connection = () => {
  mongoose
    .connect(mongourl)
    .then((res) => console.log("Connected"))
    .catch((err) => console.log("this is error", err));
};
module.exports = Connection;
