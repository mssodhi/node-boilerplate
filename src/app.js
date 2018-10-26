const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');

const config = require('./config/config');
const serviceMiddleware = require('./service.helper');
const isProd = require('./helpers/util.helper').isProd();

const app = express();
app.use(compression());
app.set('port', config.port);
app.use(logger(isProd ? 'combined' : 'dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  req.method === 'OPTIONS' ? res.sendStatus(200) : next();
});

app.post('/service', serviceMiddleware);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  if (err.status === 500) {
    res.status(200);
  } else {
    res.status(err.status || 200);
  }
  res.send({
    message: err.message,
    error: req.app.get('env') === 'local' ? err : ''
  });
});

app.listen(config.port, () => {
  console.log('Express server listening on port', config.port);
});

process.on('SIGINT', () => {
  process.exit(0);
});

module.exports = app;
