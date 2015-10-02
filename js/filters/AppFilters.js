define([], function () {

    var fn = {				
		stringReverse : function() {
	        return function(string) {
	        	return string.split('').reverse().join('');
	        }
    	}								

    };// end fn

    angular.module('App').lazy.filter('stringReverse', fn.stringReverse);

});