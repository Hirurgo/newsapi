import express, { Router } from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import path from 'path';
import cors from 'cors';
import bluebird from 'bluebird';
import cookieParser from 'cookie-parser';
import expressWinston from 'express-winston';
import bodyParser from 'body-parser';
import winston, { createLogger, format, transports } from 'winston';
import morgan from 'morgan';
import { DATABASE_URL } from './config';

import apiAuth from './routes/auth';
import apiArticles from './routes/articles';
import apiUpload from './routes/upload';

const app = express();
const router = Router();
const corsOptions = { origin: '*', optionsSuccessStatus: 200 };
const { combine, timestamp, printf } = format;
const myFormat = printf(info =>  `${info.timestamp} ${info.message}`);

mongoose.Promise = bluebird;
mongoose.connect(DATABASE_URL, { promiseLibrary: bluebird })
  .then(() => console.log('connection successful'))
  .catch(console.error);

app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/', apiAuth);
app.use('/', apiArticles);
app.use('/', apiUpload);
app.use(cookieParser());
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.use(expressWinston.logger({
  format: combine(
    timestamp(),
    myFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'info.log',
      level: 'info'
    })
  ]
}));

app.use(router);
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console(),
  ],
  format: combine(
    timestamp(),
    myFormat
  )
}));


app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.send({ error: err });
});

module.exports = app;
