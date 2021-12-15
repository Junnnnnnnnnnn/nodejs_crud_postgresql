var filmDao = require("../dao/FlimDao");

exports.getFilmInfo = async (object) => {
    return {
        info: await filmDao.getFilmInfo(object)
    };
};