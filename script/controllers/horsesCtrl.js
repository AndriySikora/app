angular
	.module('angular1')
	.controller('horsesCtrl', ['$scope', function(a) {
		a.title = 'Horses breeds';
		a.items = ['Andalusian', 'Barb', 'Friesian','Przewalski Horse'];
}]);