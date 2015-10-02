define([], function () {
    var fn = function ($q, $window, $state) {
        return {
            request: function (config) {
                return config;
            },

            requestError: function (rejection) {
                return $q.reject(rejection);
            },

            response: function (response) {
                return response;
            },

            responseError: function (rejection) {
                if (rejection.status === 404) {
                    $state.go('error');
                }
                return $q.reject(rejection);
            }
        };
    };// end fn

    angular.module('App').factory('AppInterceptorService', fn);
    return fn;
});