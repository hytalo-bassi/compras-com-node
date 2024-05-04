var createError = require('http-errors')
var express = require('express')
var logger = require('morgan')
var { notFoundHandler, errorHandler } = require('./middlewares/errorHandler')
var productsRouter = require('./routes/produtos')
var cors = require("cors")

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/produtos', productsRouter)

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
