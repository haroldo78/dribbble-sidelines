define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'scripts/views/listcell.js',
	'scripts/views/shot.js'
], function($, _, Backbone, Handlebars, ListCellView, ShotView){
	var ListView = Backbone.View.extend({
		el: $('#container'),
		events: {
			'click a.shot': 'getShot'
		},
		initialize: function(options){
			this.collection = options.collection;
			this.render();
		},
		render: function(){
			$('#loader').remove();

			_.each(this.collection.models, function(model, index){
					var listCellView = new ListCellView({model: model});
					this.$el.append(listCellView.el);
			}.bind(this));
			return this;
		},
		getShot: function(e){
			e.preventDefault();
			var shot = $(e.currentTarget);
			this.collection.get(shot.data('id')).fetch({
				success: function(model, response){
					new ShotView({model: model, comments: response.comments.comments});
				}
			});

		}
	});
	return ListView;
});