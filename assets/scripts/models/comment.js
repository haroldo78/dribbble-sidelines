define(['jquery', 'underscore','backbone'],
function($, _, Backbone){
	var CommentModel = Backbone.Model.extend({
		idAttribute: 'id'
	});
	return CommentModel;
});