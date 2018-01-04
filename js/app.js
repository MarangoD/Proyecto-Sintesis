var app= angular.module('spaApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/quiSom.html',
    })
	.when('/news/:idUser',{
		templateUrl:'views/news.html',
		controller:'NewsCtrl',
	})
	.when('/new/:idNew',{
		templateUrl:'views/new.html',
		controller:'NewCtrl',
	})
	.when('/promotions',{
		templateUrl:'views/promotions.html',
		controller:'PromotionsCtrl',
	})
	.when('/promotion/:idPromotion', {
        templateUrl: 'views/promotion.html',
        controller: 'PromotionCtrl',
    })
	.when('/dtd',{
		templateUrl:'views/dtd.html',
	})
	.when('/xml',{
		templateUrl:'views/xml.html',
	})
	/*.when('/rss',{
		templateUrl:'views/rss.html',
	})*/
	.when('/html',{
		templateUrl:'views/html.html',
	})
	.when('/contact/:idUser',{
		templateUrl:'views/contact.html',
		controller:'ContactCtrlUser',
	})
	.when('/users/:idUser',{
		templateUrl:'views/aboutUs.html',
		controller:'AboutUsCtrl',
	})
	.when('/shop/:idShop',{
		templateUrl:'views/shop.html',
		controller:'ShopCtrl',
	})    
    .otherwise({
        redirectTo: '/'
    }); 
}]); 
