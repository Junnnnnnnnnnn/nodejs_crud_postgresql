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

exports.selectOne = async (sql, object) =>{

    sessionConnect();
    sql = isObjectNull(object)? sql: convertSqlParam(sql, object);
    console.log("1");
    try {
        return (await session.query(sql)).rows[0];
    } catch (error) {
        console.log(new Error(error));
        return {
            error: new Error(error).message
        };
    }
}