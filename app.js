var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors')
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var apiRouter = require('./routes/api');


var auth = require('./middlewares/auth');

var app = express();

app.use(session({
  secret: '2C44-4D44-WppQ38S',
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}));

// view engine setup - tambien tipo de archivos
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//armado de rutas
app.use('/', indexRouter);
//si elimino las de abajo no puedo acceder 
app.use('/users', usersRouter);


app.use('/api', apiRouter);

app.use('/login', loginRouter);

app.use('/', auth, indexRouter);


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

//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