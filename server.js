const express = require("express");
const mongoose = require("mongoose");
const { mongodbURL } = require("./mongodbURL");
const app = express();
const bday = require("./models/bdays");
// const router = express.Router();

// router.get("/", function (req, res, next) {
//   res.json([
//     {bday: String},
//   ]);
// });

// connect to database
port = 3001;
mongoose
  .connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) =>
    app.listen(port, () => console.log("listening to port " + port))
  )
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
    .find() // finds all as no other parameters are specified
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
