const express = require("express");
const mongoose = require("mongoose");
const { mongodbURL } = require("./mongodbURL");
const app = express();
const bday = require("./models/bdays");
const request = require("request");
const cors = require("cors");

const birthdays = require("./routes/birthdays");

app.use(express.json());

app.use(cors({}));

app.use("/api/birthdays", birthdays);

// connect to database
port = 3001;
mongoose
  .connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) =>
    app.listen(port, () => console.log("Listening to port " + port))
  );
// .catch((err) => console.log(err));
