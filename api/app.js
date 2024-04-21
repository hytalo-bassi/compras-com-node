var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var usersRouter = require('./routes/users');
var cors = require("cors");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/users', usersRouter)

// detecta um erro 404 e manda para o errorHandler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // informa os erros apenas em 'development'
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ message: err.message, error: res.locals.error });
});

module.exports = app;
