define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'text!/scripts/templates/shotinfo.hbs',
],function($, _, Backbone, Handlebars, shotInfoTemplate){
	var ShotInfoView = Backbone.View.extend({
		el: '#shot-info',
		template: Handlebars.compile(shotInfoTemplate),
		initialize: function(options){
			this.model = options.model;
			this.render();
		},
		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
	return ShotInfoView;
});