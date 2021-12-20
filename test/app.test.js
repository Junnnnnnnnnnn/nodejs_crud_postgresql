var filmDao = require("../routes/film/dao/FlimDao");
var path = require("path");
var fs = require("fs");
var ___IMAGE_DIR =  "/Users/jeonhyeonjin/Documents/image";

var upload = () => {

    var file = fs.readFileSync(___IMAGE_DIR + "/image_jetpack.png");
    var files = fs.readdirSync(___IMAGE_DIR + "/Users/jeonhyeonjin/Documents/image/");

}


describe("필름 insert", () => {

    upload();

});
