var express = require("express");
var router = express.Router();
var index = require("./index");
var users = require("./users");

router.use("/", index);
router.use("/users", users);

module.exports = router;
