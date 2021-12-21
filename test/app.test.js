var filmDao = require("../routes/film/dao/FlimDao");
var path = require("path");
var fs = require("fs");
var exif = require("exif-parser");
var ___IMAGE_DIR =  "/Users/jeonhyeonjin/Documents/image";

var upload = () => {

    var file = fs.readFileSync(___IMAGE_DIR + "/image_auth.jpeg");
    var files = fs.readdirSync(___IMAGE_DIR);
    // console.log(files);
    // console.log(exif.create(file).parse());
    fs.stat(___IMAGE_DIR + "/image_auth.jpeg",(err,state) =>{
        console.log(state);
    });
    
}


describe("필름 insert", () => {

    upload();

});
