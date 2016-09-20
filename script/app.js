(function() {
	var app = angular.module('angular1', ['ngMaterial','ui.router','angular1.directives.navPanel']);

	app.controller('headerCtrl', ['$scope', function(e){
		e.headerTitle = 'Animals (test app)';
	}]);
	app.controller('sideNavController', function($scope, $mdSidenav) {
			$scope.openLeftMenu = function() {
				$mdSidenav('left').toggle();
			}
			$scope.close = function() {
				$mdSidenav('left').close();
			}
	});	
	app.directive('slideMenu', function() {
		return {
			restrict: 'A',
			templateUrl: 'templates/menuSlide.html',
			controller: 'sideNavController'
		};
	});  
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
