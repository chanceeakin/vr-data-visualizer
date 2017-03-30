'use strict';

const express = require('express');
const chalk = require('chalk');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const api = require('./api/api.js');

app.set('port', process.env.PORT || 3001);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.get('/api', api, function(req, res, next) {
  res.status(200).json(res.locals.apiData)
})

app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env')); 
  console.log('  Press CTRL-C to stop\n');
});
