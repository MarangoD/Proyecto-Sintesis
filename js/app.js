var app= angular.module('spaApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/quiSom.html',
    })
	.when('/dtd',{
		templateUrl:'views/dtd.html',
	})
	.when('/xml',{
		templateUrl:'views/xml.html',
	})
	.when('/rss',{
		templateUrl:'views/rss.html',
	})
	.when('/html',{
		templateUrl:'views/html.html',
	})
	.when('/css',{
		templateUrl:'views/css.html',
	})
    .otherwise({
        redirectTo: '/'
    }); 
}]); 
