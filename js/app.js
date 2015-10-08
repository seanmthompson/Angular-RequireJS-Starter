(function() {
	'use strict';
	
	//app wide common files
	var files = [
		'services/CommonService',
		'services/DataService',		
		'services/AppInterceptorService'							
	];
	
	// startup angular when the app level files are loaded
    require(files, function () {
        $(document).ready(function () {
            angular.bootstrap($('#app'), ['App']);
        });
    });

    // create an angular app and inject dependencies
    var dependencies = [
        'ui.router',
        'ngAnimate',
        'ngSanitize'
    ];
    
    var app = angular.module('App', dependencies, function () { });
    
    app.config(function ($locationProvider, $stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $httpProvider, $provide) {

        // save references to the providers
        app.lazy = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

        var commonDirectives = [
	        'filters/AppFilters',
        ];       

        var dependencies = {	        
	        home: commonDirectives.concat([
		        'controllers/HomeCtrl',
		        'directives/Sample',
	        ]),
            
            error: commonDirectives.concat([
	        	'controllers/ErrorCtrl',
	        ])
        };
        
        var loadFn = function (dependencies) {	        
            return ['$q', '$rootScope',
                function ($q, $rootScope) {
                    var dependenciesLoaded = false;

                    var deferred = $q.defer();
                    var checkResolve = function() {
                        if (!dependenciesLoaded) { return; }
                        deferred.resolve();
                    };
					

                    require(dependencies, function () {
                        dependenciesLoaded = true;                                                
                        checkResolve();
                    });

                    return deferred.promise;
                }];
        };
		
		
		$stateProvider.state('home', {
		  templateUrl: 'partials/home.html',
		  url: '/home',
		  controller: 'HomeCtlr',
		  resolve: {			
            load: loadFn(dependencies.home)            
       	  }
		});
		
		$stateProvider.state('error', {
		  templateUrl: 'partials/404.html',
		  url: '/404',
		  controller: 'ErrorCtlr',
		  resolve: {			
            load: loadFn(dependencies.error)            
       	  }
		});
		
		$urlRouterProvider.otherwise('/home');
    });
	
})();