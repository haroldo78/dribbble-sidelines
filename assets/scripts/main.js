require.config({
	paths: {
		underscore: '/bower_components/underscore/underscore',
		jquery: '/bower_components/jquery/dist/jquery',
		backbone: '/bower_components/backbone/backbone',
		app: '/scripts/app',
		foundation: '/bower_components/foundation/js/foundation.min',
		'jquery-placeholder': '/bower_components/jquery-placeholder/jquery.placeholder.min',
		'jquery.cookie': '/bower_components/jquery.cookie/jquery.cookie',
		modernizr: '/bower_components/modernizr/modernizr',
		fastclick: '/bower_components/fastclick/lib/fastclick',
		handlebars: '/bower_components/handlebars/handlebars',
		text: '/bower_components/requirejs-text/text'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		foundation: {
			deps: ['jquery', 'modernizr', 'jquery.cookie'],
			exports: 'Foundation'
		},
		handlebars: {
			exports: 'Handlebars'
		}
	}
});

require(['app', 'foundation'], function(App){
	$(document).foundation();
		App.initialize();
});