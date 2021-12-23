var express = require("express");
var router = express.Router();
var multer = require("multer");
var upload = multer({storage: multer.memoryStorage()})
var home = require("./home/controller/HomeController");
var film = require("./film/controller/FilmController");

router.use("/", home);
router.get("/filmInfo", film.getFilmInfo);
router.get("/filmList", film.getFilmList);
router.post("/category", film.insertCate);
router.put("/category", film.updateCate);
router.delete("/category", film.deleteCate);
router.post("/uploadFile",upload.single("test"),film.uploadImage);

module.exports = router;
