var express = require("express");
var router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

router.get("/", (req, res) => res.redirect("http://localhost:3000/login"));

module.exports = router;
