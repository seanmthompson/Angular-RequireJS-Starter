define([], function () {
    var directiveName = 'sampleDir';
    var fn = function ($window) {
        return {	        
            restrict: 'C',
            templateUrl: 'js/directives/Sample.html',
            link: function ($scope, element, attrs) {
	            
            }
        }
    };

    angular.module('App').lazy.directive(directiveName, fn);
});