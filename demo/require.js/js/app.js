requirejs.config({
	baseUrl: 'js/lib',
	paths: {
		selection: '../user/selection'
	},
	shim: {
	    'jquery-ui': ['jquery'],
	    'jquery-domselector': ['jquery']
	}
});
requirejs(['jquery'],  function($){

	$(function() {
		if($('img').length > 0){
			requirejs([ 'selection', 'jquery-domselector'], function(selection) {
				selection.init();
			});
		}
	});
});
