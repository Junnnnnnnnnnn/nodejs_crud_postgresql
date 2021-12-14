var pg = require("pg");

module.exports = () =>{
    var session = new pg.Client({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
    });;

    console.log("CONNET!");
    function selectOne(sql, param){
        return new Promise(function(resolve, reject){
            session.connect(err =>{
                session.query(sql, (err, res) =>{
                    if(res){
                        resolve(res.rows);
                    }
                    reject(new Error("Error!!!"));
                });
            });
        })
    }

    return {
        selectOne
    }
}
