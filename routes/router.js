var express = require("express");
var router = express.Router();
var home = require("./home/controller/HomeController");
var film = require("./film/controller/FilmController");

router.use("/", home);
router.use("/film", film);

module.exports = router;
