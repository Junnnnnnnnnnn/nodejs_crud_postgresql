var session = require("../../../db_config");

exports.getFilmInfo = async (object) => {
    var title = object.title ? "and a.title = :title" : "";
    return await session.selectOne("select * from film a where 1=1" + title, object || {});
};1

exports.getFilmList = async (object) => {
    var release_year = object.release_year ? "and a.release_year" : "";
    return await session.selectList("select * from film a where 1=1" + release_year, object || {});
}

exports.insertCate = async (object) => {
    var name = object.name ? ":name" : "null";
    return await session.insert("insert into category(name, last_update)values("+ name +", now()) RETURNING category_id", object || {});
}

exports.updateCate = async (object) => {
    var name = object.name? "name = :name": "";
    return await session.update("update category set " + name + "where 1=1 and category_id="+object.category_id+" RETURNING category_id", object || {});
}

exports.deleteCate = async (object) => {
    var category_id = object.category_id? "and category_id = :category_id" : "";
    return await session.delete("delete from category where 1=1"+ category_id +" RETURNING to_char(now(),'yyyy-MM-dd HH:mm:ss') as delete_time", object || {});
}

