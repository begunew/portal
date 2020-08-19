var express = require("express");
var router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => res.redirect("http://localhost:3000/main"));

router.get("/login", (req, res) => {
  res.redirect("http://localhost:3000/login");
});

router.post("/login", (req, res) => {
  const username = "2016089"; // Will be replaced when a true post comes.
  const password = "123123";

  User.findOne({ username, password }).then((user) => {
    if (user) {
      res.redirect("http://localhost:3000/main");
    } else {
      res.send("No such user");
    }
  });
});

router.get("/staff", (req, res) => {
  res.redirect("http://localhost:3000/main");
});
module.exports = router;
