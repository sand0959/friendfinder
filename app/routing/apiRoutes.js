var path = require('path');
var friendData = require('../data/friend.js');
var bodyParser = require('body-parser');

module.exports = function(app) {
	app.get('/api/friends', function(req, res) {
		res.json(friendData);
	});
	app.post('/api/friends', function(req, res) {
		friendData.push(req.body);
		res.json(friendData);
	});
};