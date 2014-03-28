define([
	'jquery',
	'underscore',
	'backbone',
	'scripts/router.js'
], function($, _, Backbone, Router){
	var initialize = function(){
		Router.initialize();
	}
	return {
		initialize: initialize
	};
})