angular
	.module('angular1')
	.controller('catsCtrl', ['$scope', function(a) {
		a.title = 'Cats';
		a.items = ['Cougar', 'Cheetah', 'Jaguar'];
}]);