var express = require("express");
var router = express.Router();
var home = require("./home/controller/HomeController");
var film = require("./film/controller/FilmController");

router.use("/", home);
router.get("/filmInfo", film.getFilmInfo);
router.use((req, res, next)=>{
    console.log("에러 입니다");
})

module.exports = router;
