const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);



app.use(logger('dev'));
app.use(express.json());

app.use(cookieParser());

app.listen(port, () => console.log('Listening at port: ' +port));
module.exports = app;
