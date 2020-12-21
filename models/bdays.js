const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema (like a blueprint)
let bdaySchema = new Schema({
  bday: String,
});

let bday = mongoose.model("bday", bdaySchema);
// let bday1 = bday({ bday: "12-21-2077" }).save((err) => {
//   if (err) throw err;
//   console.log("item saved");
// });

module.exports = bday;
