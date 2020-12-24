const router = require("express").Router();
const bday = require("../models/bdays");

router.get("/", (req, res) => {
  bday
    .find() // finds all as no other parameters are specified
    .then((result) => {
      res.send(result);
    })
    .then((req) => {
      console.log(req);
    });
});

router.post("/", async (req, res) => {
  // check for duplicates
  var item = await bday.findOne({ bday: req.body.bday });
  if (item) {
    return res.status(400).json({ message: "That birthday already exists" });
  }
  // else no duplicates, create new item in database
  item = new bday({
    bday: req.body.bday,
  });
  item.save();
  return res.status(201).json({ message: "Item created." });
});

module.exports = router;
