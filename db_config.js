const { query } = require("express");
var pg = require("pg");
var session = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

var sessionConnect = () => {
    console.log("CONNET!");

    session.connect(err=>{
        if(err){
            return new Error("CONNECT ERROR");
        }
    });
}

var isObjectNull = (object) => {
    return object ? false : true;
}

var isMatchKey = (str, key) => {
    return str.match(".*:"+ key +".*");
}

var convertSqlParam = (sql, object) => {
    for(var key in object){
        sql = isMatchKey(sql, key)? sql.replace(":"+key, "\'"+object[key]+"\'"): sql;
    }
    return sql;
}

sessionConnect();

exports.selectOne = async (sql, object) =>{

    sql = isObjectNull(object)? sql: convertSqlParam(sql, object);
    try {
        var query = await session.query(sql);
        if(query.rows.length > 1){
            return { error: "info size is just one! but " + query.rows.length + " size"};
        }

        if(query.rows.length <= 0){
            return {};
        }

        return query.rows[0];

    } catch (error) {
        console.log(new Error(error));
        return { error: new Error(error).message };
    }
}

exports.selectList = async (sql, object) => {

    sql = isObjectNull(object)? sql: convertSqlParam(sql, object);
    
    try {
        var query = await session.query(sql);
        return query.rows;
    } catch (error) {
        console.log(error);
        return { error: new Error(error).message};
    }
}

exports.insert = async (sql , object) => {
    sql = isObjectNull(object) ? sql : convertSqlParam(sql, object);

    try {
        var query = await session.query(sql);
        return query.rows[0];
    } catch (error) {
        console.log(new Error(error));   
    }
}

exports.update = async (sql, object) => {
    sql = isObjectNull(object)? sql : convertSqlParam(sql, object);

    try {
        return (await session.query(sql)).rows[0];
    } catch (error) {
        console.log(new Error(error));
        return new Error(error).message;
    }
}

exports.delete = async (sql, object) => {
    sql = isObjectNull(object)? sql: convertSqlParam(sql, object);

    try {
        return (await session.query(sql)).rows[0];
    } catch (error) {
        console.log(new Error(error));
        return new Error(error).message;
        
    }
}