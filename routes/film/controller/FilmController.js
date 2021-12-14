var express = require("express");
var router = express.Router();
var FilmService = require("../service/FilmService");

router.get("/", (req, res, next) => {
    var filmService = FilmService();
    filmService.getFilmCateList().then(result=>{
        res.send(result);
    })
});

module.exports = router;