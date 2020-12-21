const express = require("express");
const mongoose = require("mongoose");
const { mongodbURL } = require("./mongodbURL");
const app = express();
const Blog = require("./models/bdays");
const bday = require("./models/bdays");

// connect to database
mongoose
  .connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(3001))
  .catch((err) => console.log(err));

// app.get("/new", (req, res) => {
//   const BDAY = new bday({
//     bday: "test1",
//   });
//   BDAY.save().then((result) => {
//     // saves to database
//     res.send(result);
//     console.log(result).catch((err) => {
//       console.log(err);
//     });
//   });
// });

app.get("/", (req, res) => {
  bday
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
