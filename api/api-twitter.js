var token = require('./token');
var Twitter = require('twitter');

var client = new Twitter({
	consumer_key: token.twitterKey,
	consumer_secret: token.twitterSecret,
	access_token_key: token.twitterAT,
	access_token_secret: token.twitterATSecret
});

module.exports = function (req, res, next) {
	var params = {
		screen_name: req.params.name,
		count: 4
	};
	client.get('statuses/user_timeline', params, function (error, tweets, response) {
		if (error) {
			console.error(error);
			return next();
		}
		res.locals.twitterData = tweets;
		return next();
	});
};
