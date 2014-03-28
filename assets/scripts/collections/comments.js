define([
	'underscore',
	'backbone',
	'/scripts/models/comment.js'
], function(_, Backbone, CommentModel){
	var ShotsCollection = Backbone.Collection.extend({
		model: CommentModel,
		url: '/shot/:shotId/comments'
	});

	return ShotsCollection;
});