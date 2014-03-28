define([
	'jquery',
	'underscore',
	'backbone',
	'/scripts/views/list.js',
	'/scripts/views/shot.js',
	'/scripts/collections/shots.js',
	'/scripts/models/shot.js'
	], function($, _, Backbone, ListView, ShotView, ShotsCollection, ShotModel){

		var AppRouter = Backbone.Router.extend({
			routes: {
				'': 'showPopular',
				'/shots/:id': 'showShot'
			},
			showPopular: function(){
				var popularShots = new ShotsCollection();
				popularShots.fetch({
					success: function(collection, response){
						var listView = new ListView({collection: popularShots});
						listView.render();
					}
				});
			},
			showShot: function(){
				var shotView = new ShotView();
			}
		});

		var initialize = function(){
			var app_router = new AppRouter;
			Backbone.history.start();	
		};
		return {
			initialize: initialize
		};
});