define([], function () {
    var serviceName = 'DataService';

    var fn = function ($http) {
        var self = this;
               
        this.getSomeAPI = function() {	      
	        return $http({
				url: 'someUrlEndPoint', 
			    method: "GET",
    			params: {}
 			});    
        };


    };// end fn

    angular.module('App').service(serviceName, fn);
    return fn;
});
