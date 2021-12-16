var filmService = require("../service/FilmService");
var isError = (data) => {
    return data.error? true : false;
}

exports.getFilmInfo = async (req, res) => {
    var result = await filmService.getFilmInfo(req.query);
    console.log("RESULT ::: " + JSON.stringify(result));
    if(isError(result.info)){
        res.status(500).send(result);
        return;
    }
    res.send(result);
};

exports.getFilmList = async (req, res) => {
    var result = await filmService.getFilmList(req.query);
    if(isError(result.list)){
        res.status(500).send(result);
        return;
    }
    res.send(result);
}

exports.insertCate = async (req, res) => {
    var result = await filmService.insertCate(req.body);
    if(isError(result.insert)){
        res.status(500).send(result);
        return;
    }
    res.send(result);
}

exports.updateCate = async (req, res) => {
    var result = await filmService.updateCate(req.body);
    if(isError(result.update)){
        res.status(500).send(result);
        return;
    }
    res.send(result);
}

exports.deleteCate = async (req, res) => {
    var result = await filmService.deleteCate(req.query);
    if(isError(result.delete)){
        res.status(500).send(result);
        return;
    }
    res.send(result);
}
