var session = require("../../../db_config");

exports.getFilmInfo = async (map) => {
    var title = map.title ? "and a.title = :title" : "";
    return await session.selectOne("select * from film a where 1=1" + title, map || {});
};1