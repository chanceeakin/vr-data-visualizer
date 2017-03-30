var token = require('./token');
var request = require('ajax-request');

module.exports = function () {
  request({
    url: 'https://query.data.world/sql/coreyhermanson/toughest-sport-by-skill',
    method: 'GET',
    data: {
      query: 'SELECT * FROM `Data` LIMIT 100'
    },
    headers: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/sparql-results+json'
    }
  }, function(err, res, body) {
    if (err) {
      console.log(err);
    }
    return body;
  });
}
