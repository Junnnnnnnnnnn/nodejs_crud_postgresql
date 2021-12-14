var Session = require("../../../db_config");
var db = Session();
module.exports = () => {
    
    function getFilmCateList(){
        return new Promise((resolve, reject) => {
            db.selectOne("select now()").then(result=>{
                resolve(result);
            });
        })
    }
    return {
        getFilmCateList
    }

};