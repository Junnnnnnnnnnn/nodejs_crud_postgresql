var Session = require("pg");

var session = new Session.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

session.connect();

function selectOne(query){
    session.query('select * from film', (err, res) => {  
        return res;
        session.end()
    });
};

