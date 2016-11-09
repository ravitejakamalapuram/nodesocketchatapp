angular.module('awesome').factory('filterService', function ($rootScope, $http) {
	return {

		getUserDetails: function () {
			try{
				return $http.get($rootScope.baseUrl + '/testRL/')
				.then(function (result) {
					result = result.data;
					return result;
				});
			}
			catch(e){
			}			
		}
	}
}); 
