var express = require('express');
var logger = require('morgan');
const cors = require('cors')

var timeRouter = require('./time/timeRouter');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use('/', timeRouter);

module.exports = app;
