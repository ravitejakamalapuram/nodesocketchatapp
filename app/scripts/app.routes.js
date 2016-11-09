angular.module('awesome').config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider

        .state('home', {
                url : '/home',
                templateUrl : 'index.html',
				controller:'mainCtrl'
            })

        .state('home.you', {
                url: '/you',
                templateUrl: 'app/views/you.html',
                controller:'you'                
            })
            
        .state('home.you.are', {
                url: '/are',
                templateUrl: 'app/views/are.html',
                controller:'are'
            })

        .state('home.you.are.awesome', {
                url: '/awesome',
                templateUrl: 'app/views/awesome.html',
                controller:'awesome'
            })
			
        $urlRouterProvider.otherwise('/home/you/are/awesome');
        
})

