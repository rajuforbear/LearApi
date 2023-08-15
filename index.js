const express = require("express");
const Connection = require("./src/Connection");
const userRout = require("./src/routes");
const { port } = require("./src/constants");

const app = express();

Connection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRout);
app.listen(port, () => {
  console.log("app is listing on port 3000");
});
