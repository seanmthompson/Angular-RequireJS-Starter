define([], function () {
    var fn = function ($state) {

        var addLoadingClass = function () {
            $('body').addClass('loading');
        };

        var removeLoadingClass = function () {
            $('body').removeClass('loading');
        };
        
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){ 
	        addLoadingClass();
		})
		
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
		    removeLoadingClass();
		});

        this.showProgress = function () {
            addLoadingClass();
        };

        this.hideProgress = function () {
            removeLoadingClass();
        };


    };// end fn

    angular.module('App').service('CommonService', fn);
    return fn;
});