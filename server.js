const express = require("express");
const mongoose = require("mongoose");
const { mongodbURL } = require("./mongodbURL");

// connect to database
mongoose.connect(mongodbURL);

// create schema (like a blueprint)
let bdaySchema = new mongoose.Schema({
  bday: String,
});

let bday = mongoose.model("bday", bdaySchema);
let bday1 = bday({ bday: "12-21-2077" }).save((err) => {
  if (err) throw err;
  console.log("item saved");
});
