var dotenv = require('dotenv');
var path = require('path');
dotenv.config({path: path.join(__dirname, "/.env")});
var db = require("./db_config");

var createError = require('http-errors');
var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compress = require("compression");


var routers = require("./routes/router");

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compress());

app.get("*", (res,req,next) => {
  console.log("DIR ::: " + __dirname + " DB_USER ::: " + process.env.DB_USER + " DB_HOST ::: " + process.env.DB_HOST);
  next();
})
app.use(routers);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
