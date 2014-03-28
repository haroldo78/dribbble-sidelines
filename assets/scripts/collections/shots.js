define([
	'underscore',
	'backbone',
	'/scripts/models/shot.js'
], function(_, Backbone, ShotModel){
	var ShotsCollection = Backbone.Collection.extend({
		model: ShotModel,
		url: '/popular'
	});

	return ShotsCollection;
});