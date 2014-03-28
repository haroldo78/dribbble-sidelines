define(['jquery', 'underscore', 'backbone'], 
function($, _, Backbone){
	var ShotModel = Backbone.Model.extend({
			idAttribute: 'id',
			urlRoot: '/shots'
	});

	return ShotModel;
});
