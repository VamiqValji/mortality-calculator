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
  // filters
  // console.log(req.body.bday);
  if (req.body.bday.length < 5 && req.body.bday.length > 12) {
    return res.status(400).json({ message: "Invalid birthdate." });
  }
  var item = await bday.findOne({ bday: req.body.bday });
  if (item) {
    return res.status(400).json({ message: "That birthday already exists" });
  }
  // else, create new item in database
  item = new bday({
    bday: req.body.bday,
  });
  item.save();
  return res.status(201).json({ message: "Item created." });
});

module.exports = router;
