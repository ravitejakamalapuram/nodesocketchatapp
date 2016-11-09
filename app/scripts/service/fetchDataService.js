angular.module('awesome').factory('fetchDataService', function ($rootScope, $http) {
	return {
		getCategoryData: function (param) {
			try{
				return $http.get($rootScope.baseUrl + '/getCategoryAnalysisMetricData/' + param)
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

