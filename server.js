const express = require("express");
const mongoose = require("mongoose");
const { mongodbURL } = require("./mongodbURL");
const app = express;

// connect to database
mongoose
  .connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));
