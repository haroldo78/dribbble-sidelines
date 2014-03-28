define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'/scripts/views/comment.js',
	'text!/scripts/templates/commentlist.hbs'
], function($, _, Backbone, Handlebars, CommentView, commentListTemplate){
	var CommentList = Backbone.View.extend({
		template: Handlebars.compile(commentListTemplate),
		el: '#shot-comments',
		tagName: 'div ul',
		initialize: function(options){
			console.log('comment list init');
			this.collection = options.collection;
			this.render();
		},
		render: function(){
			this.$el.html(this.template);
			console.log('commentList render method');
			this.addAll();	
			return this;
		},
		addAll: function(){
			this.collection.each(this.addOne.bind(this));
		},
		addOne: function(model){
			var list = this.$el.find('ul'),
					view = new CommentView({model: model});
			list.append(view.el);
		}
	});
	return CommentList;
});