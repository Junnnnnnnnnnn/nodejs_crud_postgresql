var express = require("express");
var router = express.Router();

router.get("/",(req, res, next) => {
    res.send("홈입니다");
});

module.exports = router;