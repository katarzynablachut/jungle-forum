var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');

require('dotenv').config();

const { notFound, errorHandler } = require('./middlewares');

const auth = require('./auth');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to Community API! 🌈 💚'
    });
  });

app.use('/auth', auth);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
