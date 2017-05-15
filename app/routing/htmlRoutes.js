var path = require('path');

module.exports = function(app){

	app.get('/survey', function(req, res){
		res.sendFile(path.json(__dirname, '../public/survey.html'));
	});
	app.use(function(req, res){
		res.sendFile(path.json(__dirname, '../public/home.html'));
	});

};