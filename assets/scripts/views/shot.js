define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'/scripts/views/shotinfo.js',
	'/scripts/views/commentlist.js',
	'/scripts/collections/comments.js',
	'text!/scripts/templates/shot.hbs'
],function($, _, Backbone, Handlebars, ShotInfoView, CommentListView, CommentCollection, shotViewTemplate){
	var ShotView = Backbone.View.extend({
		el: $('#myModal .modal-content'),
		template: Handlebars.compile(shotViewTemplate),
		initialize: function(options){
			this.model = options.model;
			this.comments = options.comments;
			this.render();
		},
		render: function(){

			this.$el.html(this.template(this.model.toJSON()));
			$('#myModal').foundation('reveal', 'open');

			var shotInfo = new ShotInfoView({model: this.model});
			var comments = new CommentCollection(this.comments);
			var commentList = new CommentListView({collection: comments});

			return this;
		}
	});
	return ShotView;
});