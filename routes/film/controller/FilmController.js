var filmService = require("../service/FilmService");
var isError = (result) => {
    return result.info.error ? true : false;
}

exports.getFilmInfo = async (req, res, next) => {
    var result = await filmService.getFilmInfo(req.query);
    if(isError(result)){
        res.status(500).send(result);
        return;
    }
    res.send(result);
};