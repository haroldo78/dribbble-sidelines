var	Dribbble = require('../lib/dribbble'),
		d = new Dribbble();
module.exports = {
	index: function(req, res){
		res.render('index', {title: 'Popular Shots', shots: []});
	},
	popular: function(req, res) {
		var shots = {},
				params = {}
		if(typeof req.param('page') != 'undefined'){
			params.page = req.param('page');
		}
		d.getList('popular', params, function(shots){
			var i,j,shotGroups = [], chunk = 3;
			for(i=0; j = shots.shots.length, i<j; i+=chunk){
				shotGroups.push(shots.shots.slice(i, i+chunk));
			}
			res.json(shots.shots);
		});
	},
	show: function(req, res){
		d.getShot(req.param('id'), {}, function(shot){
			d.getComments(req.param('id'), {}, function(comments){
				if(req.xhr || (req.param('format') &&  req.param('format') == 'json')){
					res.json({shot: shot, comments: comments});
				}else{
					res.render('show', {shot: shot, comments: comments});
				}
			});
		});
	},
	comments: function(req, res){
		d.getComments(req.param('id'), {}, function(comments){
			res.json(comments);
		})
	}
};
