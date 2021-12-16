var filmDao = require("../dao/FlimDao");

exports.getFilmInfo = async (object) => {
    return {
        info: await filmDao.getFilmInfo(object),
    };
};

exports.getFilmList = async (object) => {
    return {
        list:  await filmDao.getFilmList(object),
    }
}

exports.insertCate = async (object) => {
    return {
        insert: await filmDao.insertCate(object),
    }
}

exports.updateCate = async (object) => {
    return {
        update: await filmDao.updateCate(object),
    }
}

exports.deleteCate = async (object) => {
    return {
        delete: await filmDao.deleteCate(object),
    }
}