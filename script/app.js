(function() {
	var app = angular.module('angular1', ['ui.router', 'angular1.directives.navPanel']);

	app.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('cats', {
			url: '/cats',
			templateUrl: 'templates/cats.html',
			controller: 'catsCtrl'
		})
		.state('dogs', {
			url: '/dogs',
			templateUrl: 'templates/dogs.html',
			controller: 'dogsCtrl'
		})
		.state('horses', {
			url: '/horses',
			templateUrl: 'templates/horses.html',
			controller: 'horsesCtrl'
		})
		.state('contact-us', {
			url: '/contact-us',
			templateUrl: 'templates/contact-us.html',
			controller: 'contactCtrl'
		});
	});
})();
