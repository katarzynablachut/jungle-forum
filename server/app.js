var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
const cors = require('cors');

require('dotenv').config();

const { checkAuthHeaderSetUser ,checkAuthHeaderSetUserUnAuthorized, notFound, errorHandler } = require('./middlewares');

const auth = require('./auth');
const api = require('./api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.use(passport.initialize());


app.use(checkAuthHeaderSetUser);

app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to Community API! 🌈 💚'
    });
  });

app.use('/auth', auth);
app.use('/api/v1/', api);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
