var home = require('./controllers/home');

module.exports.initialize = function(app){
	app.get('/', home.index);
	app.get('/popular', home.popular);
	app.get('/shots/:id', home.show);
	app.get('/shots/:id/comments', home.comments);
}