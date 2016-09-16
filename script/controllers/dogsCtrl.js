angular
	.module('angular1')
	.controller('dogsCtrl', ['$scope', function(a) {
		a.title = ' Great Dogs';
		a.items = ['Pembroke Welsh Corgi', 'Jack Russell Terrier',
'Japanese Chin'];
}]);