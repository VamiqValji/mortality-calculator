const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema (like a blueprint)
let bdaySchema = new Schema({
  bday: String,
});

let bday = mongoose.model("bday", bdaySchema);

module.exports = bday;
