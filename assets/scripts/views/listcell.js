define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'/scripts/views/shot.js',
	'text!/scripts/templates/listcell.hbs',
], function($, _, Backbone, Handlebars,ShotView, listCellTemplate){

	var ListCellView = Backbone.View.extend({
		el: '<div class="columns large-4 medium-6" />',
		initialize: function(options){
			this.model = options.model;
			this.render();
		},
		render: function(){
			
			var template = Handlebars.compile(listCellTemplate);
			this.$el.html(template(this.model.toJSON()));
			return this;
		}
	});

	return ListCellView;

});