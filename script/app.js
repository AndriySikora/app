(function() {
	var app = angular.module('angular1', ['ui.router', 'angular1.directives.navPanel', 'angular1.directives.slideMenu']);

	// app.run(function($rootScope) {
	//     document.addEventListener("keyup", function(e) {
	//         if (e.keyCode === 27)
	//             $rootScope.$broadcast("escapePressed", e.target);
	//     	});

	//     document.addEventListener("click", function(e) {
	//         $rootScope.$broadcast("documentClicked", e.target);
	//     	});
	// 	});
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
