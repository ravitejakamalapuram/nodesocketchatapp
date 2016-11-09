angular.module('awesome')
.controller('mainCtrl', function($scope, $rootScope, filterService, fetchDataService, $http, $window, $location) {
	$scope.nickname = "";
	$scope.nicknames = [];
	$scope.notempty = true;
	$scope.nameOk = true;
	$scope.submitted = false;

	var socket = io();
	var typingFin = true;

	socket.on('onlineusers' , function(data) {
		$scope.$apply(function() {
			$scope.nicknames = data.list;
		});
	});

	$scope.checkName = function(nickname2){
		$scope.submitted = true;
		$scope.nickname = nickname2;
		if (nickname2 != undefined){
			$scope.notempty = true;
		}
		else{
			$scope.notempty = false;
		}
		if ($scope.nicknames.indexOf(nickname2) === -1) {
			$scope.nameOk = true;
		}
		else{
			$scope.nameOk = false;
		}
	};

});