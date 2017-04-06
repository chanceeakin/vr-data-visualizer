'use strict';

const express = require('express');
const chalk = require('chalk');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const api = require('./api/api.js');
const apiTwitter = require('./api/api-twitter.js');

app.set('port', process.env.PORT || 3001);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.get('/api/data-world/', api, function(req, res, next) {
  res.locals.apiData = JSON.parse(res.locals.apiData);
  res.status(200).json(res.locals.apiData);
})

app.get('/api/twitter/:name', apiTwitter, function(req, res, next) {
  if(!res.locals.twitterData) {
    res.status(404).json({
      message: 'No Data found'
    })
  }
  if(res.locals.twitterData) {
    res.status(200).json(res.locals.twitterData);
  }
})

app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env')); 
  console.log('  Press CTRL-C to stop\n');
});
