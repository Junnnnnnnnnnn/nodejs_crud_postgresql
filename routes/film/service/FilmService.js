var FilmDao = require("../dao/FlimDao");
module.exports = () => {

    var filmDao = FilmDao();
    function getFilmCateList(){
        return new Promise((resolve, reject)=>{
            filmDao.getFilmCateList().then(result=>{
               resolve(result);
            });
        });
    }

    return {
        getFilmCateList
    };
};