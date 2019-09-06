const express = require("express");
const app = express();
require("dotevn").config();

app.get("/", (req, res) => {
  res.send("hello from node");
});

const port = process.env.PORT;
