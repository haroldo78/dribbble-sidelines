define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'text!/scripts/templates/comment.hbs'
], function($, _, Backbone, Handlebars, commentTemplate){
	var CommentView = Backbone.View.extend({
		tagName: 'li',
		initialize: function(options){
			this.model = options.model;
			this.render();
		},
		render: function(){
			var template = Handlebars.compile(commentTemplate);
			this.$el.html(template(this.model.toJSON()));
			return this;
		}
	});
	return CommentView;
});