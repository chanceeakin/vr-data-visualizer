var token = require('./token');
var request = require('ajax-request');

module.exports = function (req, res, next) {
  request({
    url: 'https://query.data.world/sql/coreyhermanson/toughest-sport-by-skill',
    method: 'GET',
    data: {
      query: 'SELECT * FROM `Data` LIMIT 100'
    },
    headers: {
      Authorization: 'Bearer ' + token.token,
      Accept: 'application/sparql-results+json'
    }
  }, function(err, resp, body) {
    if (err) {
      console.log(err);
    }
    if(body) {
      res.locals.apiData = body;
    }
    return next();
  });
}
